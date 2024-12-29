import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err.response?.data || err.message);
      });
  };
  return (
    <div className="sign-up-container">
      <form action="" className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <Link to='/forgotpassword'>Forgot Password</Link>
          <p>
            Don't Have Account? <Link to="/signup">Register</Link>
          </p>
        </label>
      </form>
    </div>
  );
};

export default Login;
