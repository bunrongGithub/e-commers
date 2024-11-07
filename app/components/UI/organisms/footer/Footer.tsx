import React from 'react'
import BranchName from '../../atoms/BranchName'
import InputField from '../../atoms/InputField'

const Footer = () => {
    return (
        <div className=' bg-[#E7E4F8] text-black w-full h-auto p-5 absolute bottom-0 '>
            <section className='flex justify-between items-center w-full px-44'>
                <div className='p-2 font-medium'>
                    <BranchName />
                    <InputField buttonTitle='SignUp' placholder='Enter Email Address' className='text-[13px]' />
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Contact Info</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest'>17 Princess Road,</p>
                </div>
                <div>
                    <h1 className='font-heading text-[30px] z-10'>Categories</h1>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Laptops & Computers</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Cameras & Photography</p>
                   
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Smart Phones & Tablets</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest'>Video Games & Consoles</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest'>Waterproof Headphones</p>
                </div>
                <div>
                    <h1 className='font-heading text-[30px] z-10'>Customer Care</h1>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>My Account</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Discount</p>
                   
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Returns</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest'>Orders History</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest'>Order Tracking</p>
                </div>
                <div>
                    <h1 className='font-heading text-[30px] z-10'>Pages</h1>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Blog</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Browse the Shop</p>
                   
                    <p className='my-3 text-gray-500 leading-4 tracking-widest '>Category</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest'>Pre-Built Pages</p>
                    <p className='my-3 text-gray-500 leading-4 tracking-widest'>Visual Composer Elements</p>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}

export default Footer