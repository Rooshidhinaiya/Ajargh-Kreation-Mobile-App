import { useEffect, useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

const Payment = () => {
    const [showElement, setShowElement] = useState(false);
    useEffect(() => {
        setTimeout(function () {
          setShowElement(true);
        }, 10000);
      }, []);
    const [showElement5, setShowElement5] = useState(false);
    useEffect(() => {
        setTimeout(function () {
          setShowElement5(true);
        }, 5000);
      }, []);
    // Used react-payment-inputs library for card validation
      const {
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();
    return (
        <div className='flex justify-center items-center h-[100vh] p-3  w-full font-inter font-medium'>
            <Link to='/' className="font-semibold text-white text-xs">
          <img src="/icons/product/back.png" className="absolute w-8 h-8 top-10 left-5 cursor-pointer" alt="" />
        </Link>
            <form className="w-full max-w-lg bg-[#FDF3F9] border-[#BF477F] rounded-2xl border-[1px] p-5 px-8 lg:hidden md:hidden" >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="mb-2"
                            htmlFor="grid-password"
                        >
                            Card number
                        </label>
                        <div className='flex'>
                        <input {...getCardNumberProps()}  placeholder='**** **** **** ****' className='mt-3 focus:outline-none h-14 px-4 rounded-lg border-r-0 placeholder:text-neutral-500 placeholder:text-xl rounded-r-none border-[1px] border-black w-full' />
                            <div className=' bg-white mt-3 h-14 px-4 items-center flex rounded-lg border-l-0 rounded-l-none border-[1px] border-black'>
                            <svg {...getCardImageProps({ images })} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 ">
                    <div className="w-full px-3">
                        <label
                            className="mb-2"
                            htmlFor="grid-password"
                        >
                            Name on card
                        </label>
                        <input
                            className='mt-3 focus:outline-none h-14 px-4 rounded-lg  placeholder:text-neutral-500   border-[1px] border-black w-full'
                            id="grid-password"
                            type="text"
                            placeholder="Your name"
                        />
                    </div>
                </div>

                <div className="flex gap-4 mt-4">
                    <div className="w-1/2">
                        <label
                            className="mb-2"
                            htmlFor="grid-timeSlot"
                        >
                            Expiration date
                        </label>
                        <input {...getExpiryDateProps()} 
                            className='mt-3 focus:outline-none h-14 px-4 rounded-lg  placeholder:text-neutral-500   border-[1px] border-black w-full'
                            id="grid-password"
                            type="text"
                            placeholder="MM/YY"
                        />
                    </div>
                    <div className='w-1/2'>
                        <label
                            className="mb-4"
                            htmlFor="grid-timeSlot"
                        >
                            Security code <span className=' bg-[#7E797C] text-[9px] p-[2px] px-[5px] text-[#FDF3F9] rounded-full'>?</span>
                        </label>
                        <input {...getCVCProps()}
                            className='mt-3 focus:outline-none h-14 px-4 rounded-lg  placeholder:text-neutral-500  border-[1px] border-black w-full'
                            id="grid-password"
                            type="text"
                            placeholder="CVV"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    {/* used Popup library for popup of payment process */}
                    <Popup trigger={
                        <button
                            className="text-sm p-2 w-full font-bold h-12 bg-[#BF477F] rounded-md mt-6 flex justify-center items-center gap-2 text-white" type='button'
                        >
                            <img src="/icons/payment/lock.png" className='w-3' alt="" />
                            <p>Pay now</p>
                        </button>
                    } modal nested>
                        {
                            close => (
                                <div className='relative w-[550px] h-[500px]'>
                                <div style={{opacity: showElement5 ? 0 : 1}} className='z-10 absolute bg-[#FDF3F9] w-[550px] h-[500px] flex flex-col items-center justify-center font-primary font-semibold rounded-lg'>
                                    <img src="/icons/payment/loading.png" className='w-7' alt="" />
                                    <p className='mt-6'>Payment is Processing...</p>
                                    <p className='text-xs mt-2 text-[#4B484A]'>Please wait, do not close this screen</p>
                                </div>
                                <div style={{opacity: showElement ? 0 : 1}} className='z-0 absolute bg-[#FDF3F9] w-[550px] h-[500px] flex flex-col items-center justify-center font-primary font-semibold rounded-lg'>
                                <img src="/icons/payment/done.png" className='w-7' alt="" />
                                    <p className='mt-6'>Payment received</p>
                                    <p className='text-xs mt-2 w-48 text-[#4B484A]'>Your order is no the way. Please check your email for the receipt</p>
                                </div>
                                </div>
                            )
                        }
                    </Popup>
                </div>
            </form>
            {/* change to mobile */}
            <div className='hidden h-[100vh] font-poppins w-full md:flex lg:flex'>
                <div className='w-full h-full flex items-center justify-center text-4xl font-extrabold flex-col'>
                    <p className='text-9xl'>:(</p>
                    <p className='mt-10 font-semibold'>Please Change to mobile View</p>
                </div>
            </div>
        </div>
    )
}

export default Payment
