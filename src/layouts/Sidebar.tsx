
"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { logo } from '@/assets/Home'
import { navArr } from '@/utils'

export default function Sidebar() {
    
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const toggleSubMenu = (id:number) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    return (
        <section className='h-screen w-80  p-10  flex-col gap-6 hidden lg:block border-r-2'>
            <div className='flex justify-start items-center h-20 '>
                <Link href={'/'} className='gap-3 flex flex-col '>
                    <img src={logo.src} alt="Logo" className='w-auto h-16'/>
                </Link>
            </div>
            <div className='w-full flex flex-col justify-start items-center gap-4'>
                {navArr.map((item) => (
                    <div key={item.id.toString()} className='w-full'>
                        <span 
                            className='w-full flex justify-between items-center p-2 rounded-md border border-[#cb3131] shadow-[0_5px_10px_rgb(203,49,49)] cursor-pointer'
                            onClick={() => toggleSubMenu(item.id)}
                        >
                            <Link href={`${item.url}`}>
                                <p className='text-[#cb3131] font-bold'>{item.title}</p>
                            </Link>
                        </span>
                       
                    </div>
                ))}
            </div>
        </section>
    );
}