import React from 'react'
import FoodCard from "./FoodCard"
import {FoodData} from "../data/FoodData";

const FoodIteam = () => {
  return (
    <div className="flex flex-wrap gap-7 lg:justify-start mx-6 my-10">
      {FoodData.map((Food) => (
        <FoodCard key={Food.id} 
        id={Food.id}
        name={Food.name}
        img={Food.img} 
        price={Food.price}
        desc={Food.desc}
        cateogry={Food.cateogry}
        rating={Food.rating}
        />
      ))}
      </div>
  )
}

export default FoodIteam