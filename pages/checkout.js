import React from 'react'
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle} from "@react-icons/all-files/ai/AiOutlineMinusCircle";
import {BsFillBagCheckFill, BsCash} from 'react-icons/bs';
import {FaCashRegister} from 'react-icons/fa';
import Link from 'next/link'






const Checkout = ({cart, subTotal , addToCart, removeFromCart}) => {
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>CheckOut</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      
{/*name and email*/}
      <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
        <div className="mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
        <div className='px-2 w-1/2'>
        <div className="mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
        </div>

{/*Address*/}
        <div className='px-2 w-full'>
        <div className="mb-4">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
      <textarea name="address" id="address" cols="30" rows="2" type="address" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>
      </div>
      </div>

{/*phone and city*/}
      <div className='mx-auto flex'>
      <div className='px-2 w-1/2'>
        <div className="mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone No</label>
        <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-2 w-1/2'>
        <div className="mb-4">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City </label>
        <input type="city" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      </div>

{/*state and pincode*/}
      <div className='mx-auto flex'>
      <div className='px-2 w-1/2'>
        <div className="mb-4">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input type="state" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-2 w-1/2'>
        <div className="mb-4">
        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
        <input type="pincode" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
    </div>
    
    <h2 className='font-semibold text-xl'>2. Review Cart Item's & Pay</h2>
    <div className="sideCart bg-green-300 p-6 m-4">
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length==0 && <div className='my-4' >Your Cart is Empty!</div> }
            {Object.keys(cart).map((k) =>{return <li key={k}>
              <div className="item flex my-5">
              <div className='font-semibold'>{cart[k].name}</div>
              <div className='flex items-center justify-center w-1/3 font-semibold'><AiOutlineMinusCircle onClick={() =>{removeFromCart(k, 1, cart[k].price, cart[k].name,cart[k].size, cart[k].variant)}} className='cursor-pointer'/><span  className='mx-3'>{cart[k].qty}</span><AiOutlinePlusCircle onClick={() =>{addToCart(k, 1, cart[k].price, cart[k].name,cart[k].size, cart[k].variant)}} className='cursor-pointer'/></div>
              </div>
            </li>})}
          </ol>
              <span className="total font-bold">SubTotal: ₹{subTotal}</span>
      </div>
      <div className="mx-4">
        <Link href={'/checkout'}><button className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm"><FaCashRegister className='mr-3'/>PayNow ₹{subTotal}</button></Link>
      </div> 
    </div>
    
  )
}

export default Checkout