import React from "react";
import ItemCard from '../ItemCard/ItemCard';
import socks from '../../assets/SOCKS.jpg';
import toys from '../../assets/toysdog.jpg';


const MostRecent = () => {
  return (
    <div className='w-full bg-gray-700' >
      <div className="max-w-7xl mx-auto lg:px-8 mt-1 ">
            <ItemCard timeLeft='2 hours' transport="Pickup in person" image={socks} added='Yesterday' name='Pair of socks for boy' location='Wroclaw' queue={0} category={["Children","Clothes"]}/>
            <ItemCard timeLeft='1 day 4 hours' transport="Pickup in person" image={toys} added='Today' name='Toys for dogs' location='Poznan' queue={4} category={["Toys","Animals"]}/>
      </div>
    </div>
  )
}

export default MostRecent;
