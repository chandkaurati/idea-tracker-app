import React from 'react';

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-t-4 border-t-pink-600 border-gray-200 rounded-full animate-spin"></div>
        <h1 className="text-pink-600 text-lg font-semibold mt-4 animate-pulse">Loading ...</h1>
      </div>
    </div>
  );
}

export default Loading;
