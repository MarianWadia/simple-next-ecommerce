import React from 'react'

type featureCardProps = {
    icon: React.ReactNode,
    title: string,
    desc: string,
}

export default function FeatureCard({icon, title, desc}: featureCardProps) {
  return (
    <div className='flex flex-row items-center gap-1 bg-gray-100 py-4 px-3'>
        {icon}
        <div className='flex flex-col gap-0'>
            <p className='text-black font-medium capitalize'>{title}</p>
            <p className='text-gray-600 text-xs'>{desc}</p>
        </div>
    </div>
  )
}
