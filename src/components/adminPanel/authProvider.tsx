"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react'


type propsType = {
    children: React.ReactNode;
}

export default function AuthProvider({children} : propsType) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}
