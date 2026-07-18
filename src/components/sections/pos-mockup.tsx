import { Store } from "lucide-react";

export function PosMockup() {
  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-full bg-primary/5 p-12">
      <div className="relative h-[80%] w-full -rotate-2 overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
        <div className="flex h-12 items-center justify-between border-b border-border-subtle bg-surface-container px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <Store className="text-on-primary" size={12} />
            </div>
            <div className="h-2 w-24 rounded-full bg-on-background/20" />
          </div>
          <div className="flex gap-4">
            <div className="h-2 w-8 rounded-full bg-on-background/10" />
            <div className="h-2 w-8 rounded-full bg-on-background/10" />
          </div>
        </div>
        <div className="grid h-full grid-cols-12 gap-3 p-4 sm:gap-6 sm:p-8">
          <div className="col-span-8 space-y-3 sm:space-y-6">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex aspect-square flex-col justify-between rounded-xl border border-border-subtle bg-surface-container-low p-2 sm:p-3">
                <div className="h-4 w-4 rounded-full bg-primary/10 sm:h-6 sm:w-6" />
                <div className="h-2 w-full rounded bg-on-background/10" />
              </div>
              <div className="flex aspect-square flex-col justify-between rounded-xl border border-border-subtle bg-surface-container-low p-2 sm:p-3">
                <div className="h-4 w-4 rounded-full bg-primary/10 sm:h-6 sm:w-6" />
                <div className="h-2 w-full rounded bg-on-background/10" />
              </div>
              <div className="flex aspect-square flex-col justify-between rounded-xl bg-on-background p-2 sm:p-3">
                <div className="h-4 w-4 rounded-full bg-primary sm:h-6 sm:w-6" />
                <div className="h-2 w-full rounded bg-white/20" />
              </div>
            </div>
            <div className="h-20 rounded-xl border border-border-subtle bg-surface-container-low p-2 sm:h-32 sm:p-4">
              <div className="mb-2 flex items-center justify-between sm:mb-4">
                <div className="h-3 w-16 rounded bg-on-background/20 sm:w-24" />
                <div className="h-3 w-8 rounded bg-primary/20 sm:w-12" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-on-background/5" />
                <div className="h-2 w-[90%] rounded bg-on-background/5" />
                <div className="h-2 w-[95%] rounded bg-on-background/5" />
              </div>
            </div>
          </div>
          <div className="col-span-4 h-full border-l border-border-subtle pl-2 sm:pl-6">
            <div className="mb-2 text-[8px] font-bold text-secondary sm:mb-4 sm:text-[10px]">
              ORDER
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="flex justify-between">
                <div className="h-2 w-8 rounded bg-on-background/20 sm:w-12" />
                <div className="h-2 w-4 rounded bg-on-background/20 sm:w-6" />
              </div>
              <div className="flex justify-between">
                <div className="h-2 w-10 rounded bg-on-background/20 sm:w-16" />
                <div className="h-2 w-4 rounded bg-on-background/20 sm:w-6" />
              </div>
              <div className="flex justify-between border-t border-border-subtle pt-2 sm:pt-4">
                <div className="h-3 w-8 rounded bg-on-background font-bold sm:w-12" />
                <div className="h-3 w-6 rounded bg-primary sm:w-8" />
              </div>
            </div>
            <div className="mt-4 flex h-8 w-full items-center justify-center rounded-lg bg-on-background sm:mt-12 sm:h-10">
              <div className="h-2 w-10 rounded bg-white/20 sm:w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
