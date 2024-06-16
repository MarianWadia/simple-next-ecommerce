import TableRow from '@/components/adminPanel/TableRow'
import { IProduct } from '@/redux/features/cartSlice'
import axios from 'axios'
import React from 'react'

export type ProductInterface = {
  _id: string,
  imgSrc: string,
  fileKey: string,
  name: string,
  price: number,
  category: string
}

async function getProducts(){
  try {
    const res = await axios.get('http://localhost:3000/api/products')
    console.log(res)
    const products = res.data
    console.log(products)
    return products
  } catch (error) {
   console.log(error) 
  }
} 
export default async function Dashboard() {
  const products = await getProducts()
  console.log(products)
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
                />
            ))
          }
         </tbody>
        </table>
      </div>
      
    </div>
  )
}
