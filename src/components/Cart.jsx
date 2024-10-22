import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import {FoodData} from "../data/FoodData";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import {useState} from 'react' 
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => { 
const cartItems = useSelector((state)=> state.cart.insideCart);
const [activeCart, setActiveCart] = useState(true);
  return ( 
    <>
    <div className={`fixed right-0 top-0 bg-white h-full w-full lg:w-[20vw] p-5 ${activeCart ? "translate-x-0": "translate-x-full"} transition-all duration-500 `}> 
    
      <div className="flex justify-between my-5">
        <span className="font-bold text-xl text-grey-800"> My order </span>
        <RiCloseLine onClick={()=>setActiveCart(false)} className="border-2 border-gray-600 text-gray-500 rounded-md font-bold p-.10 text-xl hover:border-red-500 cursor-pointer"/>
      </div>
      <div>
       <ItemCard />
        
       </div>
      <div className="absolute bottom-0">
      <h1 className="font-semibold text-gray-500"> Item :</h1>
      <h2 className="font-semibold text-gray-500">Total amount :</h2>
      <hr className="lg:w-[20vw] w-[70vw] my-5 "/>
      <button className="border  rounded-lg text-black-500 font-bold text-xl px-3 py-2 bg-green-500 w-[70vw] lg:w-[18vw] mb-5"> checkout</button>
    </div>
   </div>
    <FaShoppingCart onClick={()=>setActiveCart(!activeCart)} className="rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer hover:bg-gray-200 transition-all" />
    
    </>
    
  )
}

export default Cart