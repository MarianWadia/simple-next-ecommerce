"use client"
import { IProduct, removeFromCart } from '@/redux/features/cartSlice'
import { useAppDispatch } from '@/redux/hooks'
import Image from 'next/image'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'

export default function ProductCart({price, quantity, title, img, id}: IProduct) {
    const dispatch = useAppDispatch()
    // const productsOriginal = useAppSelector(state => state.cartReducer)
  return (
    <div className='flex flex-row items-center px-3 justify-between mb-4'>
        <div className='flex flex-row gap-4 items-center'>
            <Image src={img} width={70} height={70} alt='product image' />
            <div className='flex flex-col gap-2'>
                <p className='font-medium text-black capitalize'>{title}</p>
                <p className='text-sm text-gray-400'>{quantity} x ${price}</p>
            </div>
        </div>
        <div className='text-[12px] cursor-pointer' onClick={()=>dispatch(removeFromCart(id))}>
            <RxCross1 />            
        </div>
    </div>
  )
}
