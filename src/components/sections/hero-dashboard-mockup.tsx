import { TrendingUp } from "lucide-react";

export function HeroDashboardMockup() {
  return (
    <div className="relative aspect-4/3 w-full">
      <div className="mockup-shadow absolute right-0 top-10 h-[75%] w-[85%] rotate-2 transform overflow-hidden rounded-xl border border-border-subtle bg-surface">
        <div className="flex h-8 items-center gap-1.5 border-b border-border-subtle bg-surface-container px-4">
          <div className="h-2 w-2 rounded-full bg-border-subtle" />
          <div className="h-2 w-2 rounded-full bg-border-subtle" />
          <div className="h-2 w-2 rounded-full bg-border-subtle" />
        </div>
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-4 w-32 rounded bg-surface-container-low" />
            <div className="h-8 w-8 rounded-full bg-surface-container-low" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b border-border-subtle pb-3">
              <div className="h-10 w-10 rounded bg-surface-container-low" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-1/3 rounded bg-surface-container-low" />
                <div className="h-2 w-1/2 rounded bg-surface-container-low/50" />
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-border-subtle pb-3">
              <div className="h-10 w-10 rounded bg-surface-container-low" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-1/4 rounded bg-surface-container-low" />
                <div className="h-2 w-2/3 rounded bg-surface-container-low/50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mockup-shadow absolute left-0 top-0 h-[80%] w-[90%] overflow-hidden rounded-xl border border-border-subtle bg-surface">
        <div className="flex h-10 items-center justify-between bg-on-background px-4">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="h-3 w-1/3 rounded-full bg-white/10" />
          <div className="h-6 w-6 rounded bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-6 p-8">
          <div className="col-span-2">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Total Revenue
                </div>
                <div className="font-display text-3xl font-bold">
                  $124,592.00
                </div>
              </div>
              <div className="flex h-12 items-end gap-1">
                <div className="h-[40%] w-3 bg-primary" />
                <div className="h-[60%] w-3 bg-primary/80" />
                <div className="h-[90%] w-3 bg-primary" />
                <div className="h-[75%] w-3 bg-primary/90" />
                <div className="h-full w-3 bg-primary" />
              </div>
            </div>
            <div className="relative h-48 w-full rounded-lg bg-surface-container-low p-4">
              <svg className="h-full w-full" viewBox="0 0 100 40">
                <path
                  d="M0,35 Q20,30 40,20 T80,10 T100,5"
                  fill="none"
                  stroke="#FFD233"
                  strokeWidth="2"
                />
                <path
                  d="M0,35 Q20,30 40,20 T80,10 T100,5 V40 H0 Z"
                  fill="rgba(255, 210, 51, 0.05)"
                />
              </svg>
              <div className="absolute bottom-4 left-4 flex gap-4">
                <div className="h-1 w-12 rounded-full bg-primary" />
                <div className="h-1 w-12 rounded-full bg-secondary/30" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg bg-surface-container p-4">
              <div className="mb-2 text-[10px] font-bold text-secondary">
                CONVERSION
              </div>
              <div className="text-xl font-bold">3.2%</div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-success">
                +12% <TrendingUp size={10} />
              </div>
            </div>
            <div className="rounded-lg border border-border-subtle p-4">
              <div className="mb-2 text-[10px] font-bold text-secondary">
                ACTIVE USERS
              </div>
              <div className="text-xl font-bold">12,842</div>
              <div className="mt-2 flex -space-x-2">
                <div className="h-6 w-6 rounded-full border-2 border-surface bg-surface-container-low" />
                <div className="h-6 w-6 rounded-full border-2 border-surface bg-primary" />
                <div className="h-6 w-6 rounded-full border-2 border-surface bg-on-background" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/5 blur-2xl md:-right-10 md:-top-10 md:h-48 md:w-48 md:blur-3xl" />
      <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-primary/5 blur-2xl md:-bottom-10 md:-left-10 md:h-64 md:w-64 md:blur-3xl" />
    </div>
  );
}
