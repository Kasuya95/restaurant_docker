import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuthContext(); // ดึง userInfo และ authorities จาก context
  const currentUser = user?.userInfo || { username: "Guest", email: "guest@example.com", name: "Guest" };
  const roles = user?.authorities || [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="card w-96 bg-base-100 shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300 text-center">
        <div className="card-body items-center">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                alt="User Avatar"
              />
            </div>
          </div>
          <h2 className="card-title text-3xl font-bold text-primary">
            {currentUser.username}
          </h2>
          <p className="text-lg text-gray-700 mt-1">{currentUser.name}</p>
          <p className="text-md text-gray-500 mt-1">{currentUser.email}</p>
          <p className="text-sm text-yellow-500 mt-1">
            Role: {roles.join(", ")}
          </p>
          <div className="card-actions justify-center mt-4 flex gap-2">
            <button className="btn btn-accent btn-outline">
              Edit Profile
            </button>
            <button className="btn btn-warning btn-outline">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
