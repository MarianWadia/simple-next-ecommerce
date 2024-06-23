import React from 'react'
import banner1 from "../../../public/banner-1.png"

export default function Banner() {
  return (
    <div className='container w-full px-6 lg:px-18 xl:px-28 my-12'>
        <div className='grid grid-cols-[66%,44%] gap-4'>
            <div className='h-[200px] md:h-[260px] bg-[url(/banner-1.png)] bg-cover bg-center rounded-xl p-8 md:p-12'>
                <div className='flex flex-col max-w-[300px] items-start'>
                    <p className='text-white font-light text-xl'>Sale 20% off all store</p>
                    <p className='text-white text-4xl font-extrabold mt-2'>Smart phone BLU G91 Pro 2023</p>
                    <button className='mt-2 text-black text-lg hover:text-gray-300 transition-all ease-in-out font-semibold'>Shop Now</button>
                </div>
            </div>
            <div className='h-[200px] md:h-[260px] bg-[url(/banner-2.jpg)] bg-center bg-cover rounded-xl'></div>
        </div>
    </div>
  )
}
