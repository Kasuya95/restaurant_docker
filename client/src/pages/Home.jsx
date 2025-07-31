import React, { useState, useEffect, use } from "react";
import Navbar from "../components/Navbar";
import Restaurant from "../components/Restaurant";
import swal from "sweetalert2"
import RestaurantService from "../services/restaurant.service";
const Home = () => {
  const [Restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFiltedRestauranrt] = useState([]);
  useEffect(() => {
    //call api getAllRestaurants
    const getAllRestaurant = async ()=>{
      try {
        const response = await RestaurantService.getAllRestaurants();
        console.log(response);
        
        if (response.status === 200){
          setRestaurants(response.data)
          setFiltedRestauranrt(response.data)
        }
      } catch(error) {
        // catch error
        swal.fire({
          title:"Get all restaurant",
          text:error?.response?.data?.message || error.message,
        });
      };
    }
      getAllRestaurant()
  }, []);



  const handleSearch = (keyword) => {
    if (keyword === "") {
      return;
    }
    const Results = Restaurants.filter((Restaurant) => {
      return (
        Restaurant.name.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
        Restaurant.type.toLowerCase().includes(keyword.toLocaleLowerCase())
      );
    });

    setFiltedRestauranrt(Results);
  };
  return (
    <div className="container mx-auto">
      {/*header*/}
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 p-6">
          Grab Restaurant
        </h1>
      </div>
      {/*SearchBox*/}
      <div className="mb-5 flex justify-center items-center ">
        <label className="input flex items-center gap-2 w-3xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            onChange={(e) => handleSearch(e.target.value)}
            name="keyword"
          />
        </label>
      </div>
      {/*Results*/}
      <Restaurant Restaurants={filteredRestaurant} />
    </div>
  );
};

export default Home;
