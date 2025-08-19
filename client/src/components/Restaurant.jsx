import React from "react";
import Card from "./Card";
import { useAuthContext } from "../context/AuthContext";

const Restaurant = ({ Restaurants }) => {

  const {user} = useAuthContext();
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
        {Restaurants && user && Restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            type={restaurant.type}
            imageUrl={restaurant.imageUrl}
          />
        ))}
        {!user && (<div>ล็อคอินก่อน</div>)}
      </div>
    </div>
  );
};

export default Restaurant;
