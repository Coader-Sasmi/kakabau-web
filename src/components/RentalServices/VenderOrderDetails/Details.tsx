import { DetailsArr } from '@/utils/VenderOrderDetails'
import React from 'react'

export default function Details() {
  return (
    <div className='flex flex-col gap-12 items-center justify-center mt-8'>
      <div className='text-center items-center justify-center'>
        <h1 className='text-4xl text-red-600 font-bold'>Vender Order Details</h1>
      </div>
      <div className='flex gap-2'>
        <input type='date' placeholder='Choose Date' required className='bg-slate-400 p-2 w-80'/>Date
        <input type='time' placeholder='Choose Time' required className='bg-slate-400 p-2 w-40'/>Time
      </div>
      {/* <div>
        {
          DetailsArr.map((item) => (
            <div className='gap-3 w-1/2 flex flex-col'>
              Vender Names: <input type='text' placeholder='Enter Vender Names' required className='bg-slate-400 p-2 w-full'/>
              Order Names: <input type='text' placeholder='Enter Order Names' required className='bg-slate-400 p-2 w-full'/>
            </div>
          ))
        }
      </div> */}
      


      <div className='gap-3 w-1/2 flex flex-col'>
              Vender Names: <input type='text' placeholder='Enter Vender Names' required className='bg-slate-400 p-2 w-full'/>
              Order Names: <input type='text' placeholder='Enter Order Names' required className='bg-slate-400 p-2 w-full'/>
            </div>
    </div>
  )
}



