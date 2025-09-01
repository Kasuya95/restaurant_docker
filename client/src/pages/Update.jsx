import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RestaurantService from "../services/restaurant.service";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [Restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  // โหลดข้อมูลร้านอาหาร
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await RestaurantService.getRestaurantByID(id);
        setRestaurant(data);
      } catch (err) {
        console.error(err.message);
        Swal.fire("Error", "โหลดข้อมูลร้านอาหารไม่สำเร็จ", "error");
      }
    };
    fetchRestaurant();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...Restaurant, [name]: value });
  };

  const handleSubmit = async () => {
    if (!id) {
      Swal.fire("Error", "Restaurant ID is missing!", "error");
      return;
    }

    const result = await Swal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: "คุณต้องการอัปเดตร้านอาหารนี้ใช่ไหม?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "ใช่, อัปเดตเลย!",
      cancelButtonText: "ยกเลิก",
    });

    if (result.isConfirmed) {
      try {
        await RestaurantService.updateRestaurant(id, Restaurant);
        Swal.fire("สำเร็จ!", "ร้านอาหารได้รับการอัปเดต!!!", "success");
        navigate("/");
      } catch (error) {
        console.error(error);
        Swal.fire("ล้มเหลว", "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์", "error");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center ">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend flex justify-between items-center">
            Update Restaurant
            <a href="/" className="btn btn-active btn-error size-5">X</a>
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

          <label className="label">Img</label>
          <input
            value={Restaurant.imageUrl}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Place Url Img"
            name="imageUrl"
          />

          {Restaurant.imageUrl && (
            <div className="flex items-center gap-2 px-8">
              <img className="h-32" src={Restaurant.imageUrl} alt="preview" />
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="btn btn-soft btn-primary mt-4"
          >
            Update
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Update;
