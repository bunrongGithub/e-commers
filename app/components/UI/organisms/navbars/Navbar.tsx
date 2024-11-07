import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import BranchName from '../../atoms/BranchName'
import InputField from '../../atoms/InputField'

const Navbar = () => {
  return (
    <nav className='w-full h-[80px] bg-slate-100 py-[20px]'>
      <div className='w-[1400px] m-auto text-gray-900 h-full flex items-center justify-between px-[30px]'>
        <div className='flex items-center'>
          <BranchName/>
          <ul className='flex items-center justify-between'>
            <Link href={'/'} className='px-[20px] mx-3'>Home</Link>
            <li className='px-[20px] mx-3 rounded-[2px]'>Sales</li>
            <li className='px-[20px] mx-3 rounded-[2px]'>Buy</li>
            <li className='px-[20px] mx-3 rounded-[2px]'>About Us</li>
          </ul>
        </div>
        <InputField component={<FaSearch/>} placholder='Search...' />
      </div>
    </nav>
  )
}

export default Navbar