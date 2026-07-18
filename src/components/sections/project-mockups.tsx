import { Bell, TrendingUp } from "lucide-react";

export function NexuBankMockup() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-surface-container py-12 transition-colors group-hover:border-primary/50">
      <div className="relative aspect-9/19 w-[48%] overflow-hidden rounded-[40px] border-6 border-on-background bg-on-background shadow-2xl">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-1/3 -translate-x-1/2 rounded-b-2xl bg-on-background" />
        <div className="h-full bg-surface p-4 pt-10">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-8 w-8 rounded-full bg-primary" />
            <Bell className="text-secondary" size={18} />
          </div>
          <div className="mb-1 text-[10px] font-bold text-secondary">
            CURRENT BALANCE
          </div>
          <div className="mb-8 text-xl font-bold">$42,500.00</div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-xl bg-surface-container p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-surface">
                <TrendingUp className="text-primary" size={16} />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold">Investments</div>
                <div className="text-[8px] text-secondary">Up 14% this month</div>
              </div>
            </div>
            <div className="rounded-xl bg-on-background p-3 text-white">
              <div className="mb-2 text-[8px] opacity-60">Debit Card</div>
              <div className="font-mono text-sm tracking-widest">**** 4421</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LogiSmartMockup() {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border-subtle bg-surface-container p-6 transition-colors group-hover:border-primary/50">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-lg">
        <div className="flex h-8 items-center justify-between border-b border-border-subtle bg-surface-container px-4">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-border-subtle" />
            <div className="h-2 w-2 rounded-full bg-border-subtle" />
            <div className="h-2 w-2 rounded-full bg-border-subtle" />
          </div>
          <div className="h-2 w-24 rounded-full bg-surface-container-low" />
        </div>
        <div className="flex flex-1">
          <div className="w-12 space-y-4 border-r border-border-subtle bg-surface-container-low/30 p-3">
            <div className="h-6 w-6 rounded bg-primary/20" />
            <div className="h-6 w-6 rounded bg-surface-container-low" />
            <div className="h-6 w-6 rounded bg-surface-container-low" />
          </div>
          <div className="flex-1 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-4 w-32 rounded bg-surface-container-low" />
              <div className="rounded bg-success/10 px-2 py-1 text-[8px] font-bold text-success">
                LIVE OPTIMIZATION
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="relative h-20 overflow-hidden rounded-lg bg-surface-container-low">
                  <div className="absolute inset-0 p-2">
                    <div className="h-full w-full rounded border-2 border-dashed border-primary/20" />
                    <div className="absolute left-4 top-4 h-2 w-2 animate-ping rounded-full bg-primary" />
                    <div className="absolute bottom-4 right-8 h-2 w-2 rounded-full bg-on-background" />
                  </div>
                </div>
                <div className="h-3 w-3/4 rounded bg-surface-container-low" />
              </div>
              <div className="rounded-lg bg-on-background p-3 text-white">
                <div className="mb-2 text-[8px] opacity-60">AI ROUTE EFFICIENCY</div>
                <div className="text-lg font-bold">94.2%</div>
                <div className="mt-2 h-1 w-full rounded-full bg-white/20">
                  <div className="h-full w-[94%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
