

"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { navArr } from '@/utils'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleSubMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <section className='h-screen w-[22rem] p-10 flex-col gap-6 hidden lg:block border-r-2'>
      <div className='w-full flex flex-col justify-start items-center gap-4'>

        {navArr.map((item) => (
          <div key={item.id} className='w-full'>
            <div
              className='w-full flex flex-col justify-between p-2 shadow cursor-pointer '
              onClick={() => item.submenu ? toggleSubMenu(item.id) : null}
            >
              
              <div className='flex items-center justify-between'>
                <Link href={item.url} className='flex items-center gap-2'>
                  <span className='text-[#cb3131]'>{item.icon}</span>
                  <span className='text-[#cb3131] text-xl font-bold'>{item.title}</span>
                </Link>

                
                {item.submenu && (
                  <span>
                    {openMenu === item.id ? (
                      <ChevronUp className='text-[#cb3131]' size={20} />
                    ) : (
                      <ChevronDown className='text-[#cb3131]' size={20} />
                    )}
                  </span>
                )}
              </div>

              
              {item.submenu && openMenu === item.id && (
                <div className='ml-8 mt-2 space-y-2 flex flex-col gap-2'>
                  {item.submenu.map((sub, index) => (
                    <Link href={sub.url} key={index}>
                      <p className='text-[#cb3131] font-semibold transition'>
                        {sub.title}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
