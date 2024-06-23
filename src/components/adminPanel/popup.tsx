"use client"
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { makeToast } from '@/utils/helper'
import axios from 'axios'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { IoIosCloseCircle, IoIosCloseCircleOutline } from 'react-icons/io'


type popUpProps = {
  setUpdateTable: Dispatch<SetStateAction<boolean>>,
  setOpenPopup: Dispatch<SetStateAction<boolean>>
}

export default function Popup({setUpdateTable, setOpenPopup}: popUpProps) {
  const dispatch = useAppDispatch();
  const productData = useAppSelector((state)=> state.productReducer)
  const [inputData, setInputData] = useState({
    name: productData.name,
    category: productData.category,
    price: productData.price
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productData._id}`, inputData)
      console.log(res.data)
      if(res.status===200){
        makeToast('Product is updated successfully!', 'success')
        setUpdateTable((prevState)=>!prevState)
      }
    } catch (error) {
      console.log(error)
    dispatch(setLoading(false))
      makeToast('Error updating product!', 'error')
    }finally{
      setOpenPopup(false)
      dispatch(setLoading(false))
    }
  }
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-[#00000070] flex items-center justify-center'>
      <div className='relative flex flex-col gap-6 items-center bg-white p-4 w-[700px]'>
        <IoIosCloseCircleOutline 
          className='self-end hover:text-red-600 text-2xl cursor-pointer' 
          onClick={()=>setOpenPopup(false)} 
        />
        <h2 className='text-2xl font-bold'>EDIT PRODUCT</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
          <input 
            className='w-[500px] px-4 py-3 border border-gray-400 rounded-lg placeholder:text-xl bg-gray-200'
            type="text" 
            required
            value={inputData.name}
            placeholder='name'
            onChange={(e)=>{
              setInputData({...inputData, name: e.target.value})
            }}
          />
          <input 
            className='w-[500px] px-4 py-3 border border-gray-400 rounded-lg placeholder:text-xl bg-gray-200'
            type="text" 
            required
            value={inputData.category}
            placeholder='category'
            onChange={(e)=>{
              setInputData({...inputData, category: e.target.value})
            }}
          />
          <input 
            className='w-[500px] px-4 py-3 border border-gray-400 rounded-lg placeholder:text-xl bg-gray-200'
            type="text" 
            required
            value={inputData.price}
            placeholder='price'
            onChange={(e)=>{
              setInputData({...inputData, price: Number(e.target.value)})
            }}
          />
          <button className='bg-green-500 text-white text-xl rounded-md p-3 text-center self-end w-[120px]'>Save</button>
        </form>
      </div>
    </div>
  )
}
