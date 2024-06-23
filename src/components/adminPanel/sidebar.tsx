"use client"
import React from 'react'
import { MdDashboard, MdManageAccounts} from 'react-icons/md'
import { GrTransaction } from 'react-icons/gr'
import { IoAnalytics, IoSettings } from 'react-icons/io5'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsCartCheck } from "react-icons/bs";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menu = [
    {
      title: "Dashboard",
      icon: <MdDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      title: 'Products',
      icon: <RiShoppingCartLine size={20} />,
      path: "/admin/products",
    },
    {
      title: 'Accounts',
      icon: <MdManageAccounts size={20} />,
      path: "#",
    },
    {
      title: 'Transactions',
      icon: <GrTransaction size={20} />,
      path: "#",
    },
    {
      title: 'Analytics',
      icon: <IoAnalytics size={20} />,
      path: "#",
    },
    {
      title: 'Settings',
      icon: <IoSettings size={20} />,
      path: "#",
    },
  ]
export default function Sidebar() {
    const pathname = usePathname()
  return (
    <div className='w-1/5 min-h-screen flex flex-col space-y-4 bg-white p-4'>
        <Link href='/admin/dashboard' className='flex flex-row justify-center gap-2'>
            <BsCartCheck size={30} color='#BD0A30' />
            <h1 className='font-semibold text-pink text-[25px] '>shopmart</h1>
        </Link>
        <ul className='space-y-4'>
            {menu.map((item, i) => (
                <Link 
                    key={i} 
                    href={item.path} 
                    className={`flex flex-row items-center justify-center gap-4 rounded-lg bg-gray-200 p-3 hover:bg-pink transition-all ease-in-out hover:text-white ${pathname===item.path && 'bg-pink text-white' }`}
                >
                    {item.icon}
                    <p>{item.title}</p>
                </Link>
            ))}
        </ul>
    </div>
  )
}
