import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='bg-black z-10 opacity-40 h-screen w-full flex items-center justify-center'>
        <ClipLoader size={35} color='#ffff' />
    </div>
  )
}
