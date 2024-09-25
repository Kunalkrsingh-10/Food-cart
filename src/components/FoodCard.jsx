import React from 'react'
import { IoMdStar } from "react-icons/io";
const FoodCard = ({id ,img, desc, rating ,name,price,cateogry}) => {
  return (
    <div className='font-bold w-[250px]  bg-white flex flex-col rounded-lg px-10 p-5 gap-2'> 
      <img src={img}
      alt="" 
      className="w-auto h-[150px] hover:scale-110 cursor-grab transition-all duration-300 ease-in-out " />
      <div className="text-sm flex justify-between">
        <h2>{name} </h2>
        <span className='text-green-500'>₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{desc.slice(0,50)}... </p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
        <IoMdStar className="mr-1 text-yellow-500"/>{rating}
        </span>
        <button className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm ">Add to cart</button>
      </div>
    </div>
  )
}

export default FoodCard