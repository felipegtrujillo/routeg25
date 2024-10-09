'use client'

import React from 'react';

import { FaRestroom } from "react-icons/fa";
import { MdForest } from "react-icons/md";
import { FaCar } from "react-icons/fa";

function Serviceicons() {
  return (
    <div className="flex justify-center items-center space-x-4 gap-8">
      <div className="flex flex-col items-center">
        <FaRestroom size={40} />
        <p>Restroom</p>
      </div>
      <div className="flex flex-col items-center">
        <MdForest size={40} />
        <p>Nature</p>
      </div>
      <div className="flex flex-col items-center">
        <FaCar size={40} />
        <p>Parking</p>
      </div>
    </div>
  );
}
export default Serviceicons;