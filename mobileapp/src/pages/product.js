import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {

  // Counter function
  const [counter, setCounter] = useState(1)
  const incc = () => {
    setCounter(counter + 1)
  }
  const decc = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1)
  }

  return (
    // main product image 
    <div className="font-poppins">
      <div className="relative h-1/2 lg:hidden md:hidden">
        <img src="/icons/product/image.png" className="absolute" alt="" />
        <Link to='/' className="font-semibold text-white text-xs">
          <img src="/icons/product/back.png" className="absolute w-8 h-8 top-10 left-5 cursor-pointer" alt="" />
        </Link>
        <img src="/icons/product/bag.png" className="absolute w-8 h-8 top-10 right-5 cursor-pointer" alt="" />
        <img src="/icons/product/like.png" className="absolute w-8 h-8 right-5 rounded-full top-80 cursor-pointer" alt="" />
        <img src="/icons/product/dots.png" className="absolute w-12 left-1/2 rounded-full top-[340px]" alt="" />
      </div>
      {/* product description */}
      <div className='lg:hidden md:hidden fixed bottom-0 w-full flex flex-col p-6 pt-10 bg-[#FFFFFF] rounded-t-3xl h-[55%] '>
        <div className="justify-between flex w-full">
          <div>
            <p className="text-xl font-semibold">Roller Rabbit</p>
            <p className="mt-2 text-[#666666] text-xs">Vado Odelle Dress</p>
            <div className="mt-2 flex gap-1">
              <img src="icons/product/star.png" className="h-3" alt="" />
              <img src="icons/product/star.png" className="h-3" alt="" />
              <img src="icons/product/star.png" className="h-3" alt="" />
              <img src="icons/product/star.png" className="h-3" alt="" />
              <img src="icons/product/star.png" className="h-3" alt="" />
              <p className="text-xs ml-2">(320 Reviews)</p>
            </div>
          </div>
          <div className="items-center flex justify-end flex-col">
            {/* counter */}
            <div className="flex items-center h-8 justify-center w-20 text-sm gap-3 bg-[#EEEEEE] p-1 px-4 rounded-full">
              <button
                onClick={decc}
                className=" "
              >-</button>
              <p >{counter}</p>
              <button
                onClick={incc}
                className=""
              >+</button>
            </div>
            <p className="font-semibold mt-2 text-xs">Available in Stock</p>
          </div>
        </div>
        <p className="font-semibold text-lg mt-6">Size</p>
        <div className="flex gap-4 mt-3">
          <button className="border-[1px] flex w-10 h-10 items-center justify-center rounded-full text-sm font-semibold text-[#888888] border-[#DDDDDD] focus:text-white focus:bg-black">S</button>
          <button className="border-[1px] flex w-10 h-10 items-center justify-center rounded-full text-sm font-semibold text-[#888888] border-[#DDDDDD] focus:text-white focus:bg-black">M</button>
          <button className="border-[1px] flex w-10 h-10 items-center justify-center rounded-full text-sm font-semibold text-[#888888] border-[#DDDDDD] focus:text-white focus:bg-black">L</button>
          <button className="border-[1px] flex w-10 h-10 items-center justify-center rounded-full text-sm font-semibold text-[#888888] border-[#DDDDDD] focus:text-white focus:bg-black">XL</button>
          <button className="border-[1px] flex w-10 h-10 items-center justify-center rounded-full text-sm font-semibold text-[#888888] border-[#DDDDDD] focus:text-white focus:bg-black">XXL</button>
        </div>
        <p className="font-semibold text-lg mt-6">Description</p>
        <p className="text-xs text-[#666666] mt-4">Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.</p>
        <div className="mt-6 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <p className="text-[10px] text-[#AAAAAA]">Total Price</p>
            <p className="font-bold">${198 * counter}.00</p>
          </div>
          {/* link to payment */}
          <div className="bg-black flex gap-4 w-36 justify-center rounded-full items-center h-10 cursor-pointer">
            <img src="/icons/product/cart2.png" className="w-4 " alt="" />
            <Link to='/payment' className="font-semibold text-white text-xs">Buy Now</Link>
          </div>
        </div>
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

export default Product
