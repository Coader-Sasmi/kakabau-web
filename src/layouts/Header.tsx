import { navArr } from '@/utils'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { logo } from '@/assets/Home';

export default function Header() {
  return (
    <div className='main-container flex justify-between items-center gap-6 h-16 shadow-black shadow-md'>
      <div className=''>
        <img src={logo.src} className='w-full h-11'/>
      </div>
      <div className='flex gap-5'>
        <NotificationsActiveIcon />
        <AccountCircleIcon/>
     </div>
     
    </div>
  )
}
