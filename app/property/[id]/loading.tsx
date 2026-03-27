export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-2 animate-pulse">
      {/* Заголовок */}
      <div className="h-8 bg-gray-200 rounded w-96 mb-4 mt-2" />

      {/* Фото grid */}
      <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-4">
        <div className="bg-gray-200 h-72" />
        <div className="grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-34.5" />
          ))}
        </div>
      </div>

      {/* Контент + форма */}
      <div className="flex justify-between items-start min-h-screen">
        <div className="flex-1 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-64" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="flex items-center gap-4 mt-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-32" />
              <div className="h-3 bg-gray-200 rounded w-48" />
            </div>
          </div>
        </div>

        {/* Форма скелетон */}
        <div className="w-80 border border-gray-200 rounded-2xl p-6 space-y-4">
          <div className="h-8 bg-gray-200 rounded w-32" />
          <div className="h-32 bg-gray-200 rounded-xl" />
          <div className="h-12 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
