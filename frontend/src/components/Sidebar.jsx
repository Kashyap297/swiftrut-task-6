// src/components/Sidebar.jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="py-4 px-6 text-2xl font-bold">Recipe App</div>

      <nav className="flex flex-col mt-8 space-y-4 px-6">
        {/* Display the logged-in user's name */}
        {user && (
          <div className="text-sm py-2 px-4 text-gray-300">
            Welcome, {user.username}!
          </div>
        )}

        <Link to="/" className="hover:bg-gray-700 py-2 px-4 rounded">
          Browse All Recipes
        </Link>

        {!user ? (
          <>
            <Link to="/login" className="hover:bg-gray-700 py-2 px-4 rounded">
              Login
            </Link>
            <Link
              to="/register"
              className="hover:bg-gray-700 py-2 px-4 rounded"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/myfeed" className="hover:bg-gray-700 py-2 px-4 rounded">
              My Feed
            </Link>
            <button
              onClick={handleLogout}
              className="hover:bg-gray-700 py-2 px-4 rounded"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
