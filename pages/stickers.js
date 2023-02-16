

import React from 'react'
import Link from 'next/link'
import Product from "../models/Product"
import mongoose from "mongoose";

const Stickers = ({products}) => {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
          {Object.keys(products).length === 0 && <p>Sorry all the items are currently out of stock:(</p>}
          {Object.keys(products).map((item)=>{
            return<Link passHref ={true} key={products[item]._id} href={`/product/${products[item].slug}`}>
          <div className="lg:w-64 md:w-1/22 p-4 w-full shadow-lg m-5">
          <div className='block relative rounded overflow-hidden'>
          <img alt="ecommerce" className="m-auto h-[30vh] md:h-[36vh] block" src={products[item].img}/>
          </div>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Mugs</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1">₹{products[item].price}</p>
        </div>
      </div>
          </Link>})}
  </div>
</div>
</section>
<hr />
    </div>
  )
}

export async function getServerSideProps(context){
  if(mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
}
  let products = await Product.find({category:'stickers'})
  let stickers = {}
        for(let item of products){
                if(item.title in stickers){
                       if(!stickers[item.title].colour.includes(item.colour)&&item.availableQty > 0){
                                stickers[item.title].colour.push(item.colour)
                       }
                       if(!stickers[item.title].size.includes(item.size)&&item.availableQty > 0){
                        stickers[item.title].size.push(item.size)
                       }
                }
                else{
                       stickers[item.title]  = JSON.parse(JSON.stringify(item))
                       if(item.availableQty > 0){
                                stickers[item.title].colour = [item.colour]
                                stickers[item.title].size = [item.size] 
                       }
                }
        }
        console.log(stickers)
  return{
    props: {products:JSON.parse(JSON.stringify(stickers))},
  }
}

export default Stickers