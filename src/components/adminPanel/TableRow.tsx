"use client"
import { ProductInterface } from '@/app/admin/dashboard/page'
import { setLoading } from '@/redux/features/loadingSlice'
import { setProduct } from '@/redux/features/productSlice'
import { useAppDispatch } from '@/redux/hooks'
import { makeToast } from '@/utils/helper'
import axios from 'axios'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin5Line } from 'react-icons/ri'

type rowProps = {
    product: ProductInterface,
    srNo: number,
    setOpenPopup: Dispatch<SetStateAction<boolean>>,
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

export default function TableRow({ product, srNo, setOpenPopup, setUpdateTable }: rowProps) {
    const dispatch = useAppDispatch()
    const onEdit = () => {
        dispatch(setProduct(product))
        setOpenPopup(true)
    }
    const onDelete = async() => {
        try {
            dispatch(setLoading(true))
            const res1 = await axios.delete('/api/uploadthing', {data: {fileKey: product.fileKey}})
            console.log('res1', res1)
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${product._id}`)
            if(res.status === 200) {
                makeToast('Product deleted successfully', 'success')
                setUpdateTable(prevState => !prevState)
            }
        } catch (error) {
            console.log(error)
            makeToast('Error deleting product', 'error')
        }finally{
            dispatch(setLoading(false))
        }
    }
  return (
    <tr>
        <td>{srNo}</td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>
            <Image 
                src={product.imgSrc}
                width={40}
                height={40}
                alt={`${product.name} image`}
            />
        </td>
        <td>
            <div className='flex items-center gap-3'>
                <CiEdit
                    className='cursor-pointer transition-all ease-in-out text-3xl hover:text-gray-600 text-black'
                    onClick={onEdit}
                />
                <RiDeleteBin5Line 
                    className='cursor-pointer transition-all ease-in-out text-2xl text-black hover:text-red-600'
                    onClick={onDelete}
                />
            </div>
        </td>
    </tr>
  )
}
