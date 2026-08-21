export default function SearchLoading() {
  return (
    <main className="px-20 py-10">
      <div className="h-6 w-48 bg-neutral-800 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="aspect-[2/3] bg-neutral-800 rounded-lg animate-pulse" />
        ))}
      </div>
    </main>
  );
}