import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import FaceIcon from '@mui/icons-material/Face';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export default function Breadcrum() {
  return (
    <div className='w-full h-auto  gap-8 bg-white overflow-hidden mt-5'>
      <section className='w-full h-48 flex  gap-15 text-center'>
        <div className=' w-64 bg-gradient-to-br from-pink-700 to-white rounded-3xl border-4 shadow-2xl hover:shadow-black'>
            <p className='text-3xl text-black font-bold '>Total User</p>
            <PersonIcon className='!text-6xl'/>
        </div>
        <div className=' w-64 bg-gradient-to-br from-pink-700 to-white rounded-3xl border-4 hover:shadow-black shadow-2xl'>
            <p className='text-3xl text-black font-bold '>Total Vendor</p>
            <FaceIcon className='!text-6xl'/>
        </div>
        <div className=' w-64 bg-gradient-to-br from-pink-700 to-white rounded-3xl border-4 shadow-2xl hover:shadow-black'>
            <p className='text-3xl text-black font-bold '>Total Ticket</p>
            <ConfirmationNumberIcon className='!text-6xl '/>
        </div>
      </section>
      
    </div>
  )
}
