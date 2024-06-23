import React from 'react'
import { MdSupportAgent } from 'react-icons/md'
import { RiRefund2Fill } from 'react-icons/ri'
import { TbDiscount, TbTruckDelivery } from 'react-icons/tb'
import FeatureCard from './featureCard'

export default function Features() {
    const featureCardsData = [ 
        {
            icon: <TbTruckDelivery className='text-3xl' />,
            title: 'Free Delivery',
            desc: 'Orders from all items available'
        },
        {
            icon: <RiRefund2Fill className='text-3xl' />,
            title: 'Return & Refund',
            desc: 'Money back guarantee'
        },
        {
            icon: <TbDiscount className='text-3xl' />,
            title: 'Member discount',
            desc: 'on order over $99.00'
        },
        {
            icon: <MdSupportAgent className='text-3xl' />,
            title: 'support 24/7',
            desc: 'contact us 24 hours a day'
        },
    ]
  return (
    <div className='container px-6 lg:px-18 xl:px-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-1'>
            {featureCardsData.map((card, index) =>(
                <FeatureCard 
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    desc={card.desc}
                />
            ))}
        </div>
    </div>
  )
}
