import React from 'react'

function Cateogry() {
  return (
    <div className="mx-6">
        <h2 className="font-bold text-xl">Explore all your healthy and tasty food </h2>
        <div className="my-5  flex gap-1 overflow-x-scroll scroll-smooth">
            
            <button className="px-3 py-2 bg-gray-200 font-bold border rounded-lg   hover:bg-green-500 hover:text-white"> ALL </button>
            <button className="px-3 py-2  bg-gray-200 font-bold border rounded-lg   hover:bg-green-500 hover:text-white"> Breakfast </button>
            <button className="px-3 py-2  bg-gray-200 font-bold border rounded-lg   hover:bg-green-500 hover:text-white"> Lunch </button>
            <button className="px-3 py-2  bg-gray-200 font-bold border rounded-lg   hover:bg-green-500 hover:text-white"> Snacks </button>
            <button className="px-3 py-2  bg-gray-200 font-bold border rounded-lg   hover:bg-green-500 hover:text-white"> Dinner </button>
        </div>
    </div>
  )
}

export default Cateogry