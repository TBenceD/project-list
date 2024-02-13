export function LoadingCard() {
  return (
    <div className="h-64 dark:bg-slate-600 flex flex-col flex-shrink-0 dark:text-slate-400 rounded-lg border border-slate-950 shadow-lg shadow-sky-900">
      <div className="animate-pulse flex flex-col">
        <div className="rounded-t-lg bg-slate-700 h-32 w-full" />
        <div className="flex-1 space-y-3 p-2">
          <div className="h-5 bg-slate-700 rounded w-1/3" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-2 bg-slate-700 rounded col-span-2" />
            <div className="h-2 bg-slate-700 rounded col-span-1" />
            <div className="h-2 bg-slate-700 rounded col-span-2" />
            <div className="h-2 bg-slate-700 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
