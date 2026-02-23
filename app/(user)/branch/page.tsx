"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useState } from 'react'
import {increment, decrement, incrementByAmount} from '@/redux/features/conuter/counterSlice'

export default function Page() {
  const [amount, SetAmount] = useState(10);
  const count = useAppSelector((state) => state.counter.value);
  console.log(count)
  const dispatch = useAppDispatch();
  return (
    <main className='h-screen grid place-content-center'>
      <h1 className='text-5xl mb-5 text-center'>{count}</h1>
      <button onClick={() => dispatch(increment())} className='p-6 mb-5 rounded-xl text-gray-100 bg-blue-600 text-3xl font-semibold'>
        increase by 1
      </button>
      <button onClick={() => dispatch(decrement())} className='p-6 mb-5 rounded-xl text-gray-100 bg-blue-600 text-3xl font-semibold'>
        decrease by 1 
      </button>
      <button onClick={() => dispatch(incrementByAmount(amount))}  className='p-6 mb-5 rounded-xl text-gray-100 bg-blue-600 text-3xl font-semibold'>
        increase by {amount}
      </button>
    </main>
  )
}


