import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='bg-white h-screen w-full flex items-center justify-center'>
        <ClipLoader size={35} color='#3676d6' />
    </div>
  )
}
