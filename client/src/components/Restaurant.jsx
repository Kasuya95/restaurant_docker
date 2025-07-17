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
            name={Restaurant.name}
            type={Restaurant.type}
            imageUrl={Restaurant.imageUrl}
          />
        );
      })}
      </div>
    </div>
  );
}

export default Restaurant
