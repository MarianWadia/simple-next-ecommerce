import ProductForm from '@/components/adminPanel/productForm'
import React from 'react'

export default function Products() {
  return (
    <div className='h-[calc(100vh-96px)] w-full grid place-items-center overflow-y-auto'>
      <div className='bg-white flex items-center rounded-lg w-[400px] p-4'>
        <ProductForm />
      </div>
    </div>
  )
}
