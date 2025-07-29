export default function PageSkeleton() {
  return (
    <>
      <div className="container max-w-full mx-auto min-h-screen animate-pulse">
        {/* What's on your mind */}
        <div className="flex flex-col gap-5 my-6 md:my-10 xl:my-[66px]">
          <div className="flex justify-between items-center">
            <div className="h-5 w-1/2 md:w-1/3 bg-gray-300 rounded"></div>
            <div className="h-5 w-20 bg-gray-200 rounded"></div>{" "}
            {/* Filter Placeholder */}
          </div>
          <div className="flex flex-row gap-4 justify-between overflow-x-hidden py-2 px-1">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div
                key={idx}
                className="min-w-[57px] min-h-[57px] md:min-w-[95px] md:min-h-[95px] xl:min-w-[116px] xl:min-h-[116px] 
                 bg-gray-200 rounded-full shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Reordered items section skeleton */}
        <div className="mb-8 md:mb-10 xl:mb-[66px] flex flex-col gap-4">
          <div className="h-5 w-1/3 bg-gray-300 rounded"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="h-[180px] md:h-[273px] bg-gray-100 rounded-lg"
              ></div>
            ))}
          </div>
        </div>

        {/* Recommended food items section skeleton */}
        <div className="mb-8 md:mb-10 xl:mb-[66px] flex flex-col gap-4">
          <div className="h-6 w-2/5 md:w-1/4 bg-gray-300 rounded"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="h-[180px] md:h-[273px] bg-gray-100 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
