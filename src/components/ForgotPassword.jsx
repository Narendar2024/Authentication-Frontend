import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/forgot-password", {
        email,
      })
      .then((response) => {
        alert("Password reset link sent to your email");
        if (response.data.status) {
          navigate("/login");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response?.data || err.message);
      });
  };
  return (
    <div>
      <div className="sign-up-container">
        <form action="" className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
