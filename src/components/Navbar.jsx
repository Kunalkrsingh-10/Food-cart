import React from 'react'

function Navbar() {
  return (
    <nav className="flex  flex-col lg:flex-row justify-between  px-6 mb-10">
        <div><h3>{new Date().toUTCString().slice(0 ,16)}</h3>
        <h1><b>Food-Cart</b> </h1>
        </div>
        <div>
            <input type="search" name="search" id=" " placeholder="Search here" 
            className='p-3 border border-grey-300 text-sm rounded-lg outline-none w-full lg:w-[25vw] '/>
        </div>
    </nav>
  )
}

export default Navbar 