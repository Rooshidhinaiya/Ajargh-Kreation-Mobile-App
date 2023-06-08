import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        // Main App
        // Navbar
        <div className='w-full h-[90vh] overflow-scroll bg-[#FFFFFF] font-poppins scrollbar-none'>
            <div className='bg:white lg:hidden md:hidden p-7 pt-12'>
                <div className='flex justify-between items-center'>
                    <img src="/icons/home/menuicon.png" className='w-[35px] h-[35px] cursor-pointer' alt="" />
                    <img src="/icons/home/profilepic.png" className='w-[56px] cursor-pointer' alt="" />
                </div>
                <div className='flex flex-col mt-6'>
                    <p className='font-bold text-[25px]'>Welcome,</p>
                    <p className='font-semibold text-[20px] text-[#666666]'>Our Fashions App</p>
                </div>
                <div className='flex items-center w-full mt-5'>
                    <div className='bg-[#F3F4F5] h-12 flex items-center rounded-l-full px-3 pl-5'>
                        <img src="/icons/home/searchIcon.png" className='w-[20px] ' alt="" />
                    </div>
                    <input type="text" className='bg-[#F3F4F5] focus:outline-none rounded-r-full text-xs placeholder:text-[13px] h-[50px] w-full' placeholder='Search...' />
                    <img src="/icons/home/filter.png" className='cursor-pointer h-[50px] ml-4' alt="" />
                </div>
            </div>
            {/* Sale features */}
            <div className='lg:hidden md:hidden'>
                <div className='ml-3 gap-3 h-[175px] flex overflow-scroll scrollbar-none w-full'>
                    <div>
                        <div id='feature 01' className='w-[260px] h-[160px] relative'>
                            <img src="/icons/home/50percent.png" className='absolute rounded-2xl cursor-pointer' alt="" />
                            <div className='absolute top-4 left-3 cursor-pointer'>
                                <p className='font-bold text-xl'>50% Off</p>
                                <p className='text-md'>On everything today</p>
                                <p className='text-xs mt-2 font-semibold text-[#666666]'>With code: FSCREATION</p>
                                <p className='text-[10px] mt-4 font-semibold bg-black text-white w-16 text-center rounded-full p-[2px] py-[3px]'>Get Now</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div id='feature 01' className='w-[260px] h-[160px] relative'>
                            <img src="/icons/home/70percent.png" className='absolute rounded-2xl cursor-pointer' alt="" />
                            <div className='absolute top-4 left-3 cursor-pointer'>
                                <p className='font-bold text-xl'>70% Off</p>
                                <p className='text-md'>On everything today</p>
                                <p className='text-xs mt-2 font-semibold text-[#666666]'>With code: FSCREATION</p>
                                <p className='text-[10px] mt-4 font-semibold bg-black text-white w-16 text-center rounded-full p-[2px] py-[3px]'>Get Now</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products */}
                <div className='flex justify-between items-center mt-6 mx-5'>
                    <p className='font-bold'>New Arrivals</p>
                    <p className='text-xs text-[#666666] font-semibold cursor-pointer'>View All</p>
                </div>
                <div className='flex mx-5 mt-4 gap-3'>
                    <div className=' w-1/2 text-center'>
                        <Link to='/product'>
                            <div id='product1' className=' h-48 relative' >
                                <img src="/icons/home/product1.png" alt="" className='absolute object-cover w-full h-48 rounded-xl' />
                                <img src="/icons/home/like.png" className='absolute w-6 h-6 right-4 top-4' alt="" />
                            </div>
                            <p className='w-full font-semibold text-md mt-4'>The Marc Jacobs</p>
                        </Link>
                        <p className='text-xs text-[#666666]'>Traveler Tote</p>
                        <p className='font-semibold'>$195.00</p>
                    </div>

                    <div className=' w-1/2 text-center'>
                        <Link to='/product'>
                            <div id='product2' className=' h-48 relative'>
                                <img src="/icons/home/product2.png" className='absolute w-full object-cover h-48 rounded-xl' alt="" />
                                <img src="/icons/home/like.png" className='absolute w-6 h-6 right-4 top-4' alt="" />
                            </div>
                            <p className='w-full font-semibold text-md mt-4'>Axel Arigato</p>
                        </Link>
                        <p className='text-xs text-[#666666]'>Clean 90 Triple Sneakers</p>
                        <p className='font-semibold'>$245.00</p>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div id='footer' className='lg:hidden md:hidden fixed bottom-0 w-full bg left-0 right-0 flex items-center p-4 pt-8 pb-10 justify-around bg-[#FFFFFF] rounded-t-3xl h-[10%] shadow-inner'>
                <div className='flex items-center bg-[#EEEEEE] w-auto h-8 rounded-full cursor-pointer'>
                    <img src="/icons/home/home.png" className='w-8 h-8 ' alt="" />
                    <p className='font-semibold mx-2 text-sm'>Home</p>
                </div>
                <img src="/icons/home/cart.png" className='w-auto h-5 cursor-pointer' alt="" />
                <img src="/icons/home/bell.png" className='w-auto h-5 cursor-pointer' alt="" />
                <img src="/icons/home/profile.png" className='w-auto h-5 cursor-pointer' alt="" />
            </div>
            {/* change to mobile */}
            <div className='hidden h-[100vh] w-full md:flex lg:flex'>
                <div className='w-full h-full flex items-center justify-center text-4xl font-extrabold flex-col'>
                    <p className='text-9xl'>:(</p>
                    <p className='mt-10 font-semibold'>Please Change to mobile View</p>
                </div>
            </div>
        </div>
    )
}

export default Home
