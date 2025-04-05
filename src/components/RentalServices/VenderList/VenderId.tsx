"use client"

import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {  VenderId1 } from '@/utils/VenderList';

export default function VenderId() {

const [activeSearch, setActiveSearch] = useState<any>(VenderId1)

const handleSearch =  (e:any)=>{
    if(e.target.value==''){
        setActiveSearch([])
        return false
    }
    setActiveSearch(VenderId1.filter(v => v.includes(e.target.value)).slice(0,8))
}
  return (
    <form className='w-[440px] relative'>
      <h1 className='text-4xl text-red-600 font-bold items-center justify-center text-center'>Vender List</h1>
      <div className='relative'>
        <input type='Search' placeholder='Type Here' className='w-full p-4 rounded-full bg-slate-800' onChange={(e)=> handleSearch(e)}/>
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full'>
            <SearchIcon/>
        </button>
        {
            activeSearch.length > 0 && (
                <div className='absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
                    {
                        activeSearch.map((s:any)=>(
                            <span key={s}>{s}</span>
                        ))
                    }
                </div>
            )
          }
      </div>
    </form>
  )
}

