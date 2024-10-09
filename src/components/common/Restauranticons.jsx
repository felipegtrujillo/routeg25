import React from 'react';
import { BiSolidDrink } from 'react-icons/bi';
import { IoRestaurant } from 'react-icons/io5';
import { MdOutlineFoodBank, MdTableRestaurant } from 'react-icons/md';
import { TbMeat } from "react-icons/tb";

function Restauranticons() {
  return (
    <div className="flex justify-center items-center space-x-4 gap-8">
      <div className="flex flex-col items-center">
        <BiSolidDrink size={40} />
        <p>Drink</p>
      </div>
      <div className="flex flex-col items-center">
        <IoRestaurant size={40} />
        <p>Restaurant</p>
      </div>
      <div className="flex flex-col items-center">
        <TbMeat size={40} />
        <p>Meat</p>
      </div>
    </div>
  );
}
export default Restauranticons;