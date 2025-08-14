import api from "./api"
const RESTO_API = import.meta.env.VITE_RESTO_API;


//get all restaurant
const getAllRestaurants = async () =>{
    return await api.get(RESTO_API)
    
}
//get restaurant by Id
const getRestaurantByID = async (id) => {
  return await api.get(RESTO_API +"/"+ id);
};
//update restaurant by Id
const updateRestaurant = async (id,restaurant) => {
  return await api.put(RESTO_API +"/"+ id,restaurant);
};
//add restaurant
const addRestaurants = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};
//delete restaurant
const deleteRestaurants = async (id) => {
  return await api.delete(RESTO_API + "/" + id);
};

const RestaurantService ={
    getAllRestaurants,
    getRestaurantByID,
    updateRestaurant,
    addRestaurants,
    deleteRestaurants
}
export default RestaurantService