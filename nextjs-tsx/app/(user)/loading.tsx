// app/loading.tsx
import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Centered big animation */}
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-b-purple-500 border-transparent animate-[spin_1.5s_linear_infinite_reverse]"></div>
      </div>
      <h1 className="mt-8 text-4xl font-black uppercase tracking-[0.5em] text-white animate-pulse">
        Loading
      </h1>
    </div>
  )
}