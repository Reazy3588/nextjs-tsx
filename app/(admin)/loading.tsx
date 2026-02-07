// app/loading.tsx
import React from "react";

export default function AdminLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Spinner */}
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-purple-500 animate-[spin_1.5s_linear_infinite_reverse]"></div>
      </div>

      {/* Text */}
      <h1 className="mt-8 text-3xl font-extrabold tracking-widest text-white animate-pulse">
        LOADING
      </h1>
    </div>
  );
}
