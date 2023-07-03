import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", { email: email, password: password })
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        navigate("/candidates");
      })
      .catch((error) => {
        console.log(error);
        alert("Please Enter Correct Credentials");
      });
  };
  // eve.holt@reqres.in
  // cityslicka
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="loginDiv">
      <p>As of now you can enter Email-eve.holt@reqres.in</p>
      <p>Password-cityslicka</p>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="BackToHome">
          <p>Back to Home Page</p>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
