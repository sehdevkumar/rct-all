import useFetch from "./custom-hooks/useFetch";

function UsingFetchPhotos() {
  const { isLoading, data, error, setRefetch } = useFetch(
    "https://jsonplaceholder.typicode.com/photos/"
  );

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Photo Gallery</h1>
      <button
        onClick={() => setRefetch(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refresh
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.slice(1, 100).map((photo: any) => (
          <div
            key={photo?.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={photo?.thumbnailUrl}
              alt={photo?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{photo?.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsingFetchPhotos;
