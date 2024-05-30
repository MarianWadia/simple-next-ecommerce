import { signIn } from 'next-auth/react';
import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className='w-full bg-black min-h-screen flex items-center justify-center'>
        <button 
            className='flex items-center px-8 bg-white py-4 gap-4 rounded-md hover:px-12 hover:py-5 ease-out transition-all'
            onClick={()=>signIn('google')}
            >
            <FcGoogle />
            <p>Sign In with Google</p>
        </button>
    </div>
  )
}
