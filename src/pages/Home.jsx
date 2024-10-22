import React from 'react';
import Navbar from  "../components/navbar";
import Cateogry from '../components/Cateogry';
import FoodIteam from '../components/FoodIteam';
import Cart from '../components/Cart';
function Home() {
  return (
    <>
    <Navbar/>
    <Cateogry/>
    <FoodIteam/>
    <Cart/> 
    
    </>
  )
}

export default Home