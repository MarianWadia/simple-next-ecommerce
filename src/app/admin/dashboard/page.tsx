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
  const res = await axios.get('/api/products')
  const products = res.data
  console.log(products)
  return products
} 
export default async function Dashboard() {
  const products = await getProducts()
  return (
    <div>Dashboard</div>
  )
}
