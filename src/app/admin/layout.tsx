"use client"
import Login from '@/components/adminPanel/login'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Layout() {
    const {data: session} = useSession()
    if(!session?.user){
        return <Login />
    }

  return (
    <div>Layout</div>
  )
}
