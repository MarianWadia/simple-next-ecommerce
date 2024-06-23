"use client"
import Login from '@/components/adminPanel/login'
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react'
import React from 'react'
import Sidebar from '@/components/adminPanel/sidebar'
import Navbar from '@/components/adminPanel/navbar'
import Loading from '@/components/adminPanel/loading'

export default function Layout({ children } : { children : React.ReactNode}) {
    const {data: session} = useSession()
    const isLoading = useAppSelector(store => store.loadingReducer)
    
    if(!session?.user){
        return <Login />
    }
    console.log(session.user)


  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full h-full'>
        <Navbar />
        <main className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>{children}</main>
      </div>
     { isLoading && <Loading /> }
    </div>
  )
}
