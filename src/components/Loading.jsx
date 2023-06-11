import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#344e41] p-1">
        <div className="border-l-2 border-r-2 rounded-full w-full h-full p-1 border-[#3a5a40]">
          <div className="border-t-2 border-b-2 rounded-full w-full h-full p-1 border-[#588157]">
            <div className="border-l-2 border-r-2 rounded-full w-full h-full border-[#a3b18a]" />
          </div>
        </div>
      </div>
      <p className="animate-pulse">Loading...</p>
    </div>
  );
};

export default Loading;
