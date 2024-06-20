"use client"
import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loading() {
    const isLoading = useAppSelector(store => store.loadingReducer)

   return (
    <div className='bg-black z-10 opacity-40 h-screen w-screen absolute inset-0 flex items-center justify-center'>
        <ClipLoader size={35} color='#ffff' />
    </div>
  )
}
