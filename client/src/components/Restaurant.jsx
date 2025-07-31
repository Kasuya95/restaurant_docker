import React from "react";
import Card from "./Card";

const Restaurant = ({ Restaurants }) => {
  // ตรวจสอบว่า Restaurants เป็น array จริงก่อน
  if (!Array.isArray(Restaurants)) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>No restaurants available.</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {Restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            type={restaurant.type}
            imageUrl={restaurant.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
