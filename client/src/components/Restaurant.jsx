import React from 'react'
import Card from './Card'

const Restaurant = ({Restaurants}) => {
  return (
    <div className="flex ">
      <div className="flex flex-wrap justify-center gap-4">
      {Restaurants && Restaurants.map((Restaurant) => {
        return (
      
        <Card
          key={Restaurant.id}
          id={Restaurant.id}
          title={Restaurant.title}
          type={Restaurant.type}
          img={Restaurant.img}
        />
        );
      })}
      </div>
    </div>
  );
}

export default Restaurant
