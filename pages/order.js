import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb';
const Order = () => {
  return (
  <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">CodesWear.Com</h2>
        <h1 className="text-white text-3xl title-font font-medium mb-4">Order Id: #89777</h1>
        <p className="leading-relaxed mb-4">Your Order has been Successfully Placed</p>
        <div className="flex mb-4">
          <a className="flex-grow text-center border-b-2 py-2 text-lg px-1">Item Description</a>
          <a className="flex-grow text-center border-b-2 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow text-center border-b-2 py-2 text-lg px-1">Item Total</a>
        </div>
        <div className="flex border-t border-gray-800 py-2">
          <span className="text-gray-500">Wear the code (XL/Black)</span>
          <span className="ml-auto text-white">1</span>
          <span className="ml-auto text-white">₹399</span>
        </div>
        <div className="flex border-t border-gray-800 py-2">
        <span className="text-gray-500">Wear the code (XL/Red)</span>
          <span className="ml-auto text-white">1</span>
          <span className="ml-auto text-white">₹399</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-800 py-2">
        <span className="text-gray-500">Wear the code (XL/Green)</span>
          <span className="ml-auto text-white">1</span>
          <span className="ml-auto text-white">₹399</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-white">SubTotal:- ₹1169 </span>
          <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"><TbTruckDelivery className='m-1'/>Track Order</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
  )
}

export default Order