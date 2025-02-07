import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:5000/users/verify").then((response) => {
      if (!response.data.status) {
        
      } else {
        navigate("/");
      }
    });
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
