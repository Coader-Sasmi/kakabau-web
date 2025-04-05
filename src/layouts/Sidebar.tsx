"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { logo } from '@/assets/Home'
import { navArr } from '@/utils'
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(null);

    const toggleSubMenu = (id:any) => {
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
                        {/* {item.submenu && openMenu === item.id && (
                            <div className='pl-4 flex flex-col text-[#cb3131] '>
                                {item.submenu.map((subitem) => (
                                    <Link href={subitem.url} key={subitem.id.toString()} className=''>
                                        <p className=' p-2 rounded-md border-[#cb3131]'>{subitem.title}</p>
                                    </Link>
                                ))}
                            </div>
                        )} */}
                    </div>
                ))}
            </div>
        </section>
    );
}