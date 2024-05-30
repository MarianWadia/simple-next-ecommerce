"use client"
import Login from '@/components/adminPanel/login'
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react'
import React from 'react'
import Loading from './loading'

export default function Layout() {
    const {data: session} = useSession()
    const isLoading = useAppSelector(store => store.loadingReducer)
    
    if(!session?.user){
        return <Login />
    }


  return (
    <div>
      Layout
     { isLoading && <Loading /> }
    </div>
  )
}
