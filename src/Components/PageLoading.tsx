interface PageLoadingProps {
  message?: string;
}

export function PageLoading({ message = "Loading…" }: PageLoadingProps) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-4 px-6 py-20 text-stone-600"
      role="status"
      aria-live="polite"
    >
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-stone-200 border-t-stone-800"
        aria-hidden
      />
      <p className="text-center text-sm font-medium tracking-[0.2em] text-stone-500 uppercase">
        {message}
      </p>
    </div>
  );
}
