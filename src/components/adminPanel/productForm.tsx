"use client"
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch } from '@/redux/hooks'
import { makeToast } from '@/utils/helper'
import axios from 'axios'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import placeholder from "@/../public/placeholder.jpg" 
import { UploadButton } from '@/utils/uploadthing'
import { useRouter } from 'next/navigation'

type IPayload = {
    imgSrc: null|string,
    fileKey: null|string,
    name: string,
    category: string,
    price: number
}

export default function ProductForm() {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [payload, setPayload] = useState<IPayload>({
        imgSrc: null,
        fileKey: null,
        name: "",
        category: "",
        price: ""
    })
    const handleSubmit = async(e: FormEvent)=>{
        e.preventDefault();
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, payload)
            if(res.status===200){
                makeToast('Product added successfully!', 'success')
                setPayload({
                    imgSrc: null,
                    fileKey: null,
                    name: "",
                    category: "",
                    price: ""
                })
                router.replace('/admin/dashboard')
            }
        } catch (error) {
            console.log(error)
            makeToast('failed to add product', 'error')
        }finally{
            dispatch(setLoading(false))
        }
    }
  return (
    <form className='flex flex-col w-full gap-2 items-center' onSubmit={handleSubmit}>
        <Image 
            src={payload.imgSrc? payload.imgSrc : placeholder}
            width={800}
            height={500}
            alt='product image'
        />
        <UploadButton 
            endpoint='imageUploader'
            onClientUploadComplete={(res)=>{
                console.log(res);
                setPayload({
                    ...payload,
                    imgSrc: res[0]?.url,
                    fileKey: res[0]?.key
                })
            }}
            onUploadError={(error: Error)=>{
                console.log(error)
            }}
        />
        <div className='flex flex-col items-start gap-1 w-full'>
            <label htmlFor="name">Product Name</label>
            <input 
                className='bg-gray-200 rounded-lg w-full py-2 outline-pink px-1'
                type="text" 
                id='name' 
                required
                value={payload.name}
                onChange={(e)=>{
                    setPayload({
                        ...payload,
                        name: e.target.value
                    })
                }}
            />
        </div>
        <div className='flex flex-col items-start gap-2 w-full'>
            <label htmlFor="category">Product Category</label>
            <input 
                className='bg-gray-200 rounded-lg w-full py-2 outline-pink px-1'
                type="text" 
                id='category' 
                required
                value={payload.category}
                onChange={(e)=>{
                    setPayload({
                        ...payload,
                        category: e.target.value
                    })
                }}
            />
        </div>
        <div className='flex flex-col items-start gap-2 w-full'>
            <label htmlFor="price">Product Price</label>
            <input 
                className='bg-gray-200 rounded-lg w-full py-2 outline-pink px-1'
                type="text" 
                id='price' 
                required
                value={payload.price}
                onChange={(e)=>{
                    setPayload({
                        ...payload,
                        price: e.target.value
                    })
                }}
            />
        </div>
        <button className='self-end bg-pink py-2 text-white w-[100px] rounded-lg text-lg'>Add</button>
    </form>
  )
}
