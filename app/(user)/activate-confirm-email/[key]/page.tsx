import { ConfirmIcon } from '@/app/components/icons/FontAwsome'

import React from 'react'
import Button from './components/Button'
// ADD THIS IMPORT
// link http://localhost:3000/activate-confirm-email/any-value-here


type Props = {
  params: { key: string } // Changed from 'token' to 'key' to match [key]
  searchParams: any
}


export default function ConfirmEmailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      {/* Background soft glow elements */}
      <div className="absolute top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-100/50 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <section className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white bg-white/80 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
        {/* Animated Icon Container */}
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-green-50">
          <ConfirmIcon className="relative z-10 h-12 w-12 fill-green-500 transition-transform hover:scale-110" />
          {/* Subtle pulse effect */}
          <div className="absolute h-full w-full animate-ping rounded-2xl bg-green-200 opacity-20" />
        </div>
        
        <div className="mt-8 space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Email have been Conform!
          </h1>
          <p className=" text-center  text-slate-500 leading-relaxed">
            Your Email Confirm you can go to login page by press below button,
            សួរស្តី​​ ធិនសុធីរ:
          </p>
        </div>
        <div>
          <Button title="Please Login"/>
        </div>
      </section>
    </main>
  )
}




