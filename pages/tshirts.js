import React from 'react'
import Link from 'next/link'
import Product from "../models/Product"
import mongoose from "mongoose";

const Tshirts = ({products}) => {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
          {Object.keys(products).map((item)=>{
            return<Link passHref ={true} key={products[item]._id} href={`/product/${products[item].slug}`}>
          <div className="lg:w-64 md:w-1/22 p-4 w-full shadow-lg m-5">
          <div className='block relative rounded overflow-hidden'>
          <img alt="ecommerce" className="m-auto h-[30vh] md:h-[36vh] block" src={products[item].img}/>
          </div>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">TSHIRTS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1">₹{products[item].price}</p>
          <p className="mt-1">Colours Available</p>
          <div className="mt-1">
          </div>
          <div className="mt-1">
          <button className="border-2 border-gray-800 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-800 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-800 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-800 ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
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
  let products = await Product.find({category:'tshirt'})
  let tshirts = {}
        for(let item of products){
                if(item.title in tshirts){
                       if(!tshirts[item.title].colour.includes(item.colour)&&item.availableQty > 0){
                                tshirts[item.title].colour.push(item.colour)
                       }
                       if(!tshirts[item.title].size.includes(item.size)&&item.availableQty > 0){
                        tshirts[item.title].size.push(item.size)
                       }
                }
                else{
                       tshirts[item.title]  = JSON.parse(JSON.stringify(item))
                       if(item.availableQty > 0){
                                tshirts[item.title].colour = [item.colour]
                                tshirts[item.title].size = [item.size] 
                       }
                }
        }
  return{
    props: {products:JSON.parse(JSON.stringify(tshirts))},
  }
}

export default Tshirts