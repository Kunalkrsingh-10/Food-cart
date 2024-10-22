import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus} from "react-icons/fa6";

const ItemCard = () => {
  return (
    <div className="flex gap-5 shadow-2xl rounded-lg p-4">
        <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-[50px] h-[50px]"
        /> 
        <MdDelete className="absolute right-7 cursor-pointer"/>
        <div className='leading-5'> 
        <h1 className="font-bold text-gray-800 ">Onion Pizza </h1> 
        
        <div className='flex justify-between'>  
        <span className="font-bold text-green-500 ">180</span>
        <div className="flex gap-2 absolute right-6  ">
        <FaPlus  className="hover:text-white hover:bg-green-500 hover:border-none border-2 border-grey-600 text-grey-600 rounded-md text-xl transition ease-linear cursor-pointer "/>
        <span> 1</span>
        <FaMinus className="hover:text-white hover:bg-green-500 hover:border-none border-2 border-grey-600 text-grey-600 rounded-md text-xl transition ease-linear cursor-pointer " />
        </div>
        </div>
        </div>
    </div>
  )
}

export default ItemCard