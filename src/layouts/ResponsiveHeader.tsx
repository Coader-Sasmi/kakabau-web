"use client"
// import { logo1 } from '@/assets/Home'
import React, { useState } from 'react'
import ListIcon from '@mui/icons-material/List';
import { Collapse } from '@mui/material';
import { navArr } from '@/utils'
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { logo } from '@/assets/Home';


export default function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
    <section className='w-full bg-themeColor text-black sticky top-0 z-[999] bg-gradient-to-tr from-gray-800 to-gray-400'>
     <section className='w-full h-20 flex items-center justify-between  lg:hidden z-[999] main-container'>
      <Link href={"/"}>
     <img src={logo.src}  className='w-auto h-12'/>
      </Link>
     
     <ListIcon className=' !text-5xl' onClick={()=>{
      setIsOpen(!isOpen)
     }}/>
     </section> 
     </section>
     <Collapse in={isOpen} timeout="auto" unmountOnExit>
     {
      navArr.map((item)=>(
        <Link href={`${item.url}`} key={item.id.toString()}>
        <div className='w-full p-2 flex items-center justify-between border border-black   lg:hidden z-[999]' key={item.id.toString()}>
          <h1>{item.title}</h1>
          <ArrowForwardIcon className='!text-3xl'/>
        </div>
        </Link>
      ))
     }
     </Collapse>
    </>
  )
}
