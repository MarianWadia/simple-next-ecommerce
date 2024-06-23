"use client"
import { useAppSelector } from '@/redux/hooks'
import React, { Dispatch, SetStateAction } from 'react'
import { RxCross1 } from 'react-icons/rx'
import ProductCart from './productCart'

type cartProps = {
    setShowCart: Dispatch<SetStateAction<boolean>>
}

export default function Cart({setShowCart}: cartProps) {
    const products = useAppSelector(state => state.cartReducer)

    function getTotal():number{
        let total = 0
        products.forEach(product => total = total + product.quantity * product.price)
        return total
    }
  return (
    <div className='w-full h-screen bg-[#0000007d] fixed top-0 left-0 x-20 overflow-y-scroll'>
        <div className='w-1/4 bg-white min-h-full absolute top-0 right-0 p-6'>
            <div className='flex items-end justify-end text-[20px] text-black cursor-pointer' onClick={()=>setShowCart(false)}>
                <RxCross1 />
            </div>
            <h2 className='text-gray-500 uppercase text-lg my-4'>your cart</h2>
            {products.map(product => (
                <ProductCart 
                    key={product.id} 
                    price={product.price}
                    quantity={product.quantity}
                    img={product.img}
                    title={product.title}
                    id={product.id}
                />
            ))}
            <div className='flex items-center justify-between flex-row mt-4'>
                <p className='font-medium text-black text-lg'>Total:</p>
                <p className='font-bold '>${getTotal()}.00</p>
            </div>
            <div className='flex flex-col w-full gap-3 items-center mt-4'>
                <button className='w-full bg-black text-white text-center rounded-full py-2 hover:bg-accent transition-all ease-in-out'>
                    View Cart
                </button>
                <button className='w-full bg-black text-white text-center rounded-full py-2 hover:bg-accent transition-all ease-in-out'>
                    Checkout Cart
                </button>
            </div>
        </div>
    </div>
  )
}
