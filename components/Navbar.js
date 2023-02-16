import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";
import mugs from "../pages/mugs"

//React Icons
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle} from "@react-icons/all-files/ai/AiOutlineMinusCircle";
import {BsFillBagCheckFill} from 'react-icons/bs';
import {MdAccountCircle} from 'react-icons/md';
//import {AiOutlineLogin} from 'react-icons/ai';//<AiOutlineLogin className='text-xl md:text-3xl mx-2'/>


//Cart Functions
const NavBar = ({logout,user, cart, addToCart, removeFromCart, clearCart, subTotal}) => { 
  const [dropdown, setDropdown] = useState(false) 
  const toggleDropdown = () =>{
    setDropdown(!dropdown)
  }
  const toggleCart = () =>{
      if (ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-full')
        ref.current.classList.add('translate-x-0')
      }

      else if (!ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('translate-x-full')
      }
  }
const ref = useRef()

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-4 shadow-md sticky top-0 bg-white z-10'>
      <div className='logo mr-auto md:mx-5'>
      <Link href={'/'}> 
      <Image className='bg-transparent' src="/logo.png" alt="logo" width={200} height={40}/>
      </Link> 
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
            <Link href={'/tshirts'}><li className='hover:text-green-400'>Tshirts</li></Link>
            <Link href={'/hoodies'}><li className='hover:text-green-400'>Hoodies</li></Link>
            <Link href={'/stickers'}><li className='hover:text-green-400'>Stickers</li></Link>
            <Link href={'/mugs'}><li className='hover:text-green-400'>Mugs</li></Link>
        </ul>
      </div>
      <div className="cart items-center absolute right-0 top-4 mx-5 cursor-pointer flex ">
        <a onMouseOver={()=>{setDropdown(true)}}  onMouseLeave={()=>{setDropdown(false)}}>
      {dropdown && <div onMouseOver={()=>{setDropdown(true)}}  onMouseLeave={()=>{setDropdown(false)}} className="absolute right-9 bg-green-500 top-3 rounded-md px-5 w-48">
            <ul>
              <Link href={'/myaccount'}><li className='py-2 hover:text-green-300 text-sm'>My Account</li></Link>
              <Link href={'/orders'}><li className='py-2 hover:text-green-300 text-sm'>Orders</li></Link>
              <li onClick={logout} className='py-2 hover:text-green-300 text-sm'>Logout</li>
            </ul>
      </div>}
      {user.value && <MdAccountCircle className='text-xl md:text-3xl mx-2'/>}
      </a>
        {!user.value && <Link href={'/login'}><button className='bg-green-500 text-white px-2 py-1 rounded-md mx-2 text-sm hover:bg-green-300 hover:text-black'>Login</button></Link>}
        <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-3xl'/>
      </div>
     
      <div ref = {ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-green-300 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0': 'translate-x-full'}`}>
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-green-700"><AiFillCloseCircle/></span>
          <ol className='list-decimal font-semibold'>
            
            {Object.keys(cart).length==0 && <div className='my-4' >Your Cart is Empty!</div> }
            {Object.keys(cart).map((k) =>{return <li key={k}>
              <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>{cart[k].name}</div>
              <div className='flex items-center justify-center w-1/3 font-semibold'><AiOutlineMinusCircle onClick={() =>{removeFromCart(k, 1, cart[k].price, cart[k].name,cart[k].size, cart[k].variant)}} className='cursor-pointer'/><span  className='mx-3'>{cart[k].qty}</span><AiOutlinePlusCircle onClick={() =>{addToCart(k, 1, cart[k].price, cart[k].name,cart[k].size, cart[k].variant)}} className='cursor-pointer'/></div>
              </div>
            </li>})}
          </ol>
          <div className="total font-bold my-3">SubTotal: ₹{subTotal}</div>
          <div className="flex">
          <Link href={'/checkout'}><button className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />CheckOut</button></Link>
          <button onClick={clearCart} className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">Clear Cart</button>
          </div>
      </div>
    </div>
  )
}

export default NavBar
