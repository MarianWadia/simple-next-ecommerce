import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsCartCheck, BsSearch } from 'react-icons/bs'

type navbarProps = {
    setShowCart: Dispatch<SetStateAction<boolean>>
}

export default function Navbar({setShowCart}: navbarProps) {
  const cartCount = useAppSelector(state => state.cartReducer.length)

  return (
    <nav className='pt-4 sticky w-full bg-white top-0'>
      <div className="container w-full px-6 lg:px-18 xl:px-28">
        <div className='flex w-full items-center justify-between'>
          <Link href='/' className='flex flex-row justify-center gap-2'>
              <h1 className='font-semibold text-gray-800 text-[25px] hover:text-pink transition-all ease-in-out'>Shopmart</h1>
          </Link>
          <div className='lg:flex flex-row hidden w-full max-w-[500px]'>
            <input type="text" placeholder='Search for products...' className='border-2 border-accent px-6 py-2 w-full' />
            <div className='grid place-items-center text-[24px] bg-accent px-3 text-white'>
              <BsSearch />
            </div>
          </div>

          <div className='flex flex-row gap-4 md:gap-8 items-center'>
            <div className='flex flex-row items-center gap-4'>
              <div className='rounded-full text-[24px] text-gray-600 bg-white border-2 border-gray-400 w-10 h-10 flex items-center justify-center'>
                <AiOutlineUser />
              </div>
              <div className='flex flex-col items-start text-sm'>
                <p className='text-gray-400'>Hello, sign in</p>
                <p className='text-black font-medium'>Your Account</p>
              </div>
            </div>

            <div className='relative text-gray-600 text-[32px] cursor-pointer' onClick={()=>setShowCart(prev=>!prev)}>
              <AiOutlineShoppingCart />
              <div className='absolute -top-1 -right-2 bg-red-600 grid place-items-center text-white rounded-full h-[20px] w-[20px] text-[14px]'>
                {cartCount}
              </div>
            </div>

          </div>
          
        </div>

        <div className='border-b border-b-gray-200 pt-4'></div>
      </div>
    </nav>
  )
}
