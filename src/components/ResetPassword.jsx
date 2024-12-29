import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/reset-password/" + token, {
        password,
      })
      .then((response) => {
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
          <h2>Reset Password</h2>

          <label htmlFor="email">
            New Password:
            <input
              type="password"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
