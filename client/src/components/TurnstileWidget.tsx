import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
          theme: "light";
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire: () => void;
  resetSignal?: number;
}

const SCRIPT_ID = "cloudflare-turnstile-script";

export default function TurnstileWidget({
  onVerify,
  onExpire,
  resetSignal = 0,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [siteKey, setSiteKey] = useState("");
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetch("/api/turnstile-config")
      .then((response) => {
        if (!response.ok) throw new Error("Turnstile is not configured");
        return response.text();
      })
      .then((configuredSiteKey) => {
        if (!configuredSiteKey) throw new Error("Turnstile is not configured");
        setSiteKey(configuredSiteKey);
      })
      .catch(() => setLoadError(true));
  }, []);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    let cancelled = false;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const renderWidget = () => {
      if (cancelled || !containerRef.current || !window.turnstile) return;
      if (widgetIdRef.current) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": () => {
          onExpire();
          setLoadError(true);
        },
        theme: "light",
      });
    };

    const existingScript = document.getElementById(SCRIPT_ID);
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      script.onerror = () => setLoadError(true);
      document.head.appendChild(script);
    } else if (window.turnstile) {
      renderWidget();
    } else {
      const waitForScript = () => {
        if (cancelled) return;
        if (window.turnstile) {
          renderWidget();
        } else {
          retryTimer = setTimeout(waitForScript, 100);
        }
      };
      waitForScript();
    }

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onVerify, onExpire]);

  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [resetSignal]);

  if (loadError) {
    return (
      <p className="text-sm text-destructive" role="alert">
        Security verification could not load. Please refresh and try again.
      </p>
    );
  }

  return (
    <div className="min-h-[65px]">
      <div ref={containerRef} />
      {!siteKey && (
        <p className="text-sm text-muted-foreground">
          Loading security verification…
        </p>
      )}
    </div>
  );
}