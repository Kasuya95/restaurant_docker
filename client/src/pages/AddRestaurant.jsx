import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

const AddRestaurant = () => {
  const [Restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...Restaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ ตรวจสอบข้อมูลก่อนส่ง
    if (!Restaurant.name || !Restaurant.type || !Restaurant.imageUrl) {
      Swal.fire("ข้อมูลไม่ครบ!", "กรุณากรอกข้อมูลให้ครบทุกช่อง", "warning");
      return;
    }

    try {
      const response = await RestaurantService.addRestaurants(Restaurant);
      if (response.status === 200 || response.status === 201) {
        Swal.fire("สำเร็จ!", "เพิ่มร้านอาหารเรียบร้อยแล้ว", "success");
        setRestaurant({
          name: "",
          type: "",
          imageUrl: "",
        });
      } else {
        Swal.fire("ล้มเหลว!", "ไม่สามารถเพิ่มร้านอาหารได้", "error");
      }
    } catch (error) {
      console.error("Add error:", error);
      Swal.fire("ผิดพลาด!", "เกิดข้อผิดพลาดในระบบ", "error");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <legend className="fieldset-legend flex justify-between items-center">
            Add Restaurant
            <a className="btn btn-active btn-error size-5" href="/">
              X
            </a>
          </legend>

          <label className="label">Name</label>
          <input
            value={Restaurant.name}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Place Name"
            name="name"
          />

          <label className="label">Type</label>
          <input
            value={Restaurant.type}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Place Type"
            name="type"
          />

          <label className="label">Image URL</label>
          <input
            value={Restaurant.imageUrl}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Place Url Img"
            name="imageUrl"
          />

          {Restaurant.imageUrl && (
            <div className="flex items-center gap-2 px-8 mt-2">
              <img
                className="h-32 rounded-md shadow-md"
                src={Restaurant.imageUrl}
                alt="preview"
              />
            </div>
          )}

          <button type="submit" className="btn btn-soft btn-primary mt-4 w-full">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
