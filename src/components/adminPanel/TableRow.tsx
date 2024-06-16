"use client"
import { ProductInterface } from '@/app/admin/dashboard/page'
import Image from 'next/image'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin5Line } from 'react-icons/ri'

type rowProps = {
    product: ProductInterface,
    srNo: number,
}

export default function TableRow({ product, srNo }: rowProps) {
    const onEdit = () => {}
    const onDelete = () => {}
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
            <div className='flex items-center gap-3 text-gray-600 text-2xl'>
                <CiEdit
                    className='cursor-pointer hover:text-black'
                    onClick={onEdit}
                />
                <RiDeleteBin5Line 
                    className='cursor-pointer hover:text-black'
                    onClick={onDelete}
                />
            </div>
        </td>
    </tr>
  )
}
