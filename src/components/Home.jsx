import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    try {
      axios.get("http://localhost:5000/users/logout").then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
      });
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  return (
    <div>
      Home
      <button>
        <Link to="/dashboard">Dashboard</Link>
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
