import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3007/login/success", {
        withCredentials: true,
      });
      setUser(response.data.user);
    } catch (error) {
      navigate("*");
    }
  };

  const logout = () => {
    window.open("http://localhost:3007/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  const profileImage = user?.photo || "https://via.placeholder.com/100";
  const displayName = user?.displayName || "User";
  const email = user?.email || "Email not available";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center relative">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Profile</h1>

        {user ? (
          <div className="space-y-4">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="profile"
                className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-blue-500"
              />
              <button
                onClick={logout}
                className="absolute left-45 bottom-30 bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition font-bold"
                title="Logout"
              >
                Logout
              </button>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {displayName}
            </h2>
            <p className="text-gray-600">{email}</p>
          </div>
        ) : (
          <p className="text-gray-600">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
