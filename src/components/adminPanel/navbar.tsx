"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  const {data: session} = useSession()

  return (
    <div className='p-4 flex justify-between items-center'>
      <h2 className='text-[25px] font-bold'>E-commerce Admin Panel - ShopMart</h2>
      <div className='rounded-full w-10 h-10'>
        <Image src={session?.user?.image!} width={50} height={50} className='rounded-full' alt='user image' />
      </div>
    </div>
  )
}
