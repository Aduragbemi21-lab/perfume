import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import  Image  from "../assets/google_icon.png";
import { useState } from "react";
import frame from  "../assets/Frame.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const redirect = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!email.trim() || !password.trim()) {
        setError("Please provide your email and password to sign in");
      } else {
        redirect("/");
      }
    };

  return (
    <div className="formbg">
      <header className="ps-2 py-3">
        <nav className="container">
          <Link className="text-decoration-none" to={"/"}>
            <div className="position-absolute top-0 start-0 p-5">
              <span className="main-color-bg text-white rounded-circle p-3">
                PZ
              </span>{" "}
              <span className="text-white"> Perfumrye </span>
            </div>
          </Link>
        </nav>
      </header>

      <div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-white p-5 shadow-lg rounded-2"
        >
          <h1>Welcome Back</h1>
          <p>Fill in your information to access your account</p>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control my-2"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control my-2"
            placeholder="Enter your password"
          />
          <p className="text-danger">
            {error}
          </p>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="checkbox" className="form-check-label">
                {" "}
                Remember Me
              </label>
            </div>
            <Link className="text-danger" to="/register">
              Forgot password?
            </Link>
          </div>
          <button type="submit"
            style={{ backgroundColor: "#8D34FF", height: "64px" }}
            className="text-white mt-2 border-0 rounded-2 w-100"
          >
            Sign In
          
          </button>
          <p className="text-center my-auto mt-2">or</p>
          <button style={{ height: "64px" }} className="border-0 w-100 mt-2">
            
            Continue with Google
          </button>
          <p className="text-center mt-2">
            Dont have an account?
            <Link style={{ color: "#8D34FF" }} to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
