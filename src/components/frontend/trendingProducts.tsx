"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import { useAppDispatch } from '@/redux/hooks'
import { setLoading } from '@/redux/features/loadingSlice'


type productType = {
    _id: string,
    name: string,
    imgSrc: string,
    fileKey: string,
    price: number,
    category: string,
    updatedAt: string
}


export default function TrendingProducts() {
    const [products, setProducts] = useState([])
    const dispatch = useAppDispatch()
    async function getProducts(){
       try {
        dispatch(setLoading(true))
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
        const products = res.data
        setProducts(products)
       } catch (error) {
        console.log(error)
       }finally{
        dispatch(setLoading(false))
       }
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className='mt-12 w-full container px-6 lg:px-18 xl:px-28'>
        <div className='w-full flex flex-row justify-between items-center py-4'>
            <h2 className='text-3xl font-bold'>Trending Products</h2>
            <div className='flex flex-row gap-2 text-gray-600 font-medium'>
                <p className='text-black'>New</p>
                <p>Featured</p>
                <p>Top Sellers</p>
            </div>
        </div>
        <div className='flex flex-row items-center gap-12 max-w-[800px] flex-wrap'>
            {products.map((product: productType) =>(
                <ProductCard 
                    key={product._id}
                    id={product._id}
                    price={product.price}
                    category={product.category}
                    name={product.name}
                    imgSrc={product.imgSrc}
                />
            ))}
        </div>
    </div>
  )
}
