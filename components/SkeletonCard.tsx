export default function SkeletonCard() {
  return (
    <div className="w-full max-w-sm animate-pulse rounded-xl border border-neutral-700 bg-neutral-900 p-6 shadow-md">
      <div className="h-4 w-32 rounded bg-neutral-700 mb-4" />
      <div className="h-4 w-20 rounded bg-neutral-700 mb-2" />
      <div className="h-3 w-16 rounded bg-neutral-800 mb-6" />
      <div className="h-8 w-full rounded bg-neutral-700" />
    </div>
  );
}