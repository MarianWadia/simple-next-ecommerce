"use client"
import React from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai'
import { useAppDispatch } from '@/redux/hooks'
import { addToCart } from '@/redux/features/cartSlice'


type productCardProps ={
    id: string,
    name: string,
    imgSrc: string,
    price: number,
    category: string,
}

export default function ProductCard({id, name, imgSrc, price, category}: productCardProps) {
    const dispatch = useAppDispatch()
    function addProductToCart(){
        const payload = {
            id,
            title: name,
            price,
            img: imgSrc,
            quantity: 1
        }
        dispatch(addToCart(payload))
    }
  return (
    <div className='w-[350px] border border-gray-200 flex flex-col'>
        <div className='grid place-items-center'>
            <Image src={imgSrc} width={300} height={300} alt='product image' />
        </div>
        <div className='border-t border-t-gray-200 px-4 py-3 flex flex-col'>
            <p className='text-gray-400 font-medium text-sm'>{category}</p>
            <p className='text-gray-700 font-medium'>{name}</p>
            <div className='flex flex-row gap-1 text-[18px] items-center text-yellow-400 mt-1'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <p className='text-gray-600 font-medium text-sm pl-4'>(3 Reviews)</p>
            </div>
            <div className='flex flex-row items-center justify-between mt-3'>
                <p className='text-accent text-lg font-bold '>${price}</p>
                <div 
                    className='flex flex-row items-center justify-center gap-1 text-white bg-pink py-2 px-3 rounded-sm hover:bg-[#8A071F] transition-all ease-in-out'
                    onClick={()=>{addProductToCart}}
                >
                    <AiOutlineShoppingCart />
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}
