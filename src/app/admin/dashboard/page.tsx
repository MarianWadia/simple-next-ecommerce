"use client"
import Popup from '@/components/adminPanel/popup'
import TableRow from '@/components/adminPanel/TableRow'
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch } from '@/redux/hooks'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

export type ProductInterface = {
  _id: string,
  imgSrc: string,
  fileKey: string,
  name: string,
  price: string,
  category: string
}


export default function Dashboard() {
  const [products, setProducts] = useState([])
  const [openPopup, setOpenPopup] = useState(false)
  const [updateTable, setUpdateTable] = useState(false)

  const dispatch = useAppDispatch()
  const getProducts = useCallback(async()=>{
      try {
        dispatch(setLoading(true));
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
        setProducts(res.data)
      } catch (error) {
       console.log(error) 
      } finally{
        dispatch(setLoading(false))
      }
  },[dispatch])

  useEffect(()=>{
    getProducts()
  },[updateTable])
  
  return (
    <div className='h-[calc(100vh-96px)] p-4 bg-white rounded-lg'>
      <h2 className='text-3xl'>All Products</h2>
      <div className='mt-3 h-[calc(100vh-180px)] overflow-y-auto'>
        <table className='w-full'>
         <thead>
          <tr className='text-gray-500 border-t border-[#ececec]'>
              <th>SR No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Picture</th>
              <th>Actions</th>
          </tr>
         </thead>
         <tbody>
          {
            products.map((product: ProductInterface, index: number) =>(
              <TableRow 
                product={product}
                key = {product._id}
                srNo={index + 1}
                setUpdateTable={setUpdateTable}
                setOpenPopup={setOpenPopup}
                />
            ))
          }
         </tbody>
        </table>
      </div>
      {openPopup && (
        <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
      )}
    </div>
  )
}
