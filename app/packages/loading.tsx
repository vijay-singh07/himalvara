export default function PackagesLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[340px] bg-[#e8e4db]" />

      {/* Filter bar skeleton */}
      <div className="sticky top-[64px] z-20 bg-white border-b border-[#e4e4e4] py-3 px-6">
        <div className="flex gap-2 max-w-7xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-[#e8e4db]" />
          ))}
        </div>
      </div>

      {/* Card grid skeleton */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="h-4 w-24 bg-[#e8e4db] rounded mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-[#e8e4db]">
              <div className="aspect-[4/3] bg-[#e8e4db]" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-[#e8e4db] rounded w-3/4" />
                <div className="h-3 bg-[#e8e4db] rounded w-1/2" />
                <div className="h-3 bg-[#e8e4db] rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
