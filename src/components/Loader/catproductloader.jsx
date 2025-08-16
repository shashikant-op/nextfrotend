export  function Skeletoncard() {
  return (
    <div className="flex flex-col w-full md:flex-row !justify-between overflow-hidden rounded-md mb-2 gap-2 animate-pulse bg-white p-2">
      
      {/* Left Section: Image + Details */}
      <div className="flex flex-row w-full justify-around overflow-hidden md:w-3/5 gap-4">
        
        {/* Image Placeholder */}
        <div className="flex-shrink-0">
          <div className="w-30 h-30 bg-purple-100 rounded-md" />
        </div>

        {/* Details Placeholder */}
        <div className="w-full space-y-2">
          <div className="h-4 w-3/4 bg-purple-100 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />

          {/* Tags */}
          <div className="flex gap-2">
            <div className="h-5 w-12 bg-purple-50 rounded-full" />
            <div className="h-5 w-14 bg-purple-50 rounded-full" />
            <div className="h-5 w-10 bg-purple-50 rounded-full" />
          </div>
        </div>

      </div>
    </div>
  );
}
