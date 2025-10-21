import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Bootstrap confirmation page - Step 0
function BootstrapPage() {
  return (
    <main className="container py-24">
      <div className="rounded-xl bg-card p-10 shadow-card">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight">
          SENIL — Bootstrapped
        </h1>
        <p className="mt-4 text-lg">
          Brand tokens, fonts, and Tailwind are wired. Proceed to Step 1 (Entry Animation + Header).
        </p>
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded" style={{ backgroundColor: 'var(--ash)' }} />
            <span>Ash Stone (#D8D5CC)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded" style={{ backgroundColor: 'var(--olive)' }} />
            <span>Olive Slate (#75776A)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded" style={{ backgroundColor: 'var(--graphite)' }} />
            <span className="text-white bg-graphite px-2 rounded">Deep Graphite (#1E1E1C)</span>
          </div>
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>✅ Tailwind configured with brand tokens</p>
          <p>✅ Inter (sans) + Newsreader (display/serif) fonts loaded</p>
          <p>✅ Container max-width: 1200px</p>
          <p>✅ Border radius: 12px (lg), 16px (xl), 999px (pill)</p>
          <p>✅ Card shadow configured</p>
        </div>
      </div>
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={BootstrapPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;