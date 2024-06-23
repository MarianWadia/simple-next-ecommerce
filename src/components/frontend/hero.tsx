import React from 'react'
import heroImg from "@/../public/hero-img.png"
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <div className='bg-[#E3EDF6] w-full my-8'>
        <div className='container flex flex-col md:flex-row items-center justify-between px-6 lg:px-18 xl:px-28 py-8'>
            <div className='flex flex-col gap-3 max-w-[450px]'>
                <p className='capitalize text-gray-400'>Starting from <span className='font-bold text-black'>$999.00</span></p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-topHeadingPrimary'>The best notebook collection 2023</h2> 
                <p className="text-2xl font-['Oregano', cursive]">Exclusive offer <span className='text-pink font-medium'>-10%</span> off this week</p>           
                <Link 
                    href='/' 
                    className='bg-white text-black font-medium text-center w-[120px] py-3 rounded-lg text-sm hover:bg-accent transition-all ease-in-out hover:text-white'>
                        Shop Now
                </Link>
            </div>
            <Image src={heroImg} width={250} height={300} alt='hero product image' />
        </div>
    </div>
  )
}
