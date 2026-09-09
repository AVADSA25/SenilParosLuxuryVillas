import type { Request, Response, NextFunction } from "express";

interface TurnstileResponse {
  success: boolean;
  "error-codes"?: string[];
}

const attempts = new Map<string, number[]>();
const DEVELOPMENT_SECRET_KEY = "1x0000000000000000000000000000000AA";

export function formRateLimit(maxRequests = 5, windowMs = 15 * 60 * 1000) {
  return (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();
    const key = `${req.path}:${req.ip}`;
    const recentAttempts = (attempts.get(key) ?? []).filter(
      (timestamp) => now - timestamp < windowMs,
    );

    if (recentAttempts.length >= maxRequests) {
      res.setHeader(
        "Retry-After",
        Math.ceil((windowMs - (now - recentAttempts[0])) / 1000).toString(),
      );
      return res.status(429).json({
        error: "Too many requests. Please wait before trying again.",
      });
    }

    recentAttempts.push(now);
    attempts.set(key, recentAttempts);
    next();
  };
}

export async function verifyTurnstile(
  token: unknown,
  remoteIp?: string,
): Promise<boolean> {
  const secret =
    process.env.NODE_ENV === "development"
      ? DEVELOPMENT_SECRET_KEY
      : process.env.TURNSTILE_SECRET_KEY;

  if (!secret || typeof token !== "string" || token.length === 0) {
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      },
    );

    if (!response.ok) return false;
    const result = (await response.json()) as TurnstileResponse;
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}