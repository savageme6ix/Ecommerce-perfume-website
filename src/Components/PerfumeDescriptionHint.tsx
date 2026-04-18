import { useId } from "react";

interface PerfumeDescriptionHintProps {
  description?: string | null;
  /** Extra positioning / layout classes (parent must be `relative`) */
  className?: string;
}

export function PerfumeDescriptionHint({
  description,
  className = "",
}: PerfumeDescriptionHintProps) {
  const text = description?.trim();
  if (!text) return null;

  const tooltipId = useId();

  return (
    <div
      className={`pointer-events-auto absolute z-20 hidden md:block group ${className}`}
    >
      <button
        type="button"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300/90 bg-white/95 text-[12px] leading-none text-stone-600 shadow-sm backdrop-blur-[2px] transition-all duration-200 hover:border-stone-800 hover:bg-[#F5F5F0] hover:text-stone-900 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-800/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="About this fragrance"
        aria-describedby={tooltipId}
      >
        <span aria-hidden>?</span>
      </button>
      <div
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none invisible absolute right-0 top-[calc(100%+0.45rem)] z-30 w-[min(17rem,calc(100vw-3rem))] translate-y-0.5 rounded-xl border border-stone-200/90 bg-white p-3.5 text-left text-[13px] font-normal leading-relaxed tracking-wide text-stone-600 shadow-lg opacity-0 ring-1 ring-stone-900/[0.04] transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        {text}
      </div>
    </div>
  );
}
