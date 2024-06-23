import axios from 'axios'
import React from 'react'
import ProductCard from './productCard'


type productType = {
    _id: string,
    name: string,
    imgSrc: string,
    fileKey: string,
    price: number,
    category: string,
    updatedAt: string
}

async function getProducts(){
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
    const products = res.data
    return products
}
export default async function TrendingProducts() {
    const products = await getProducts()
    // console.log('products', products)
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
        <div className='grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8'>
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
