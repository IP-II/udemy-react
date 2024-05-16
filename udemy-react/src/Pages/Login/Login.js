import React, { useState } from "react";
import "./login.css"; // Import CSS file for login styles
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import Validation from "./LoginValidation"; // Corrected import statement
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
// import err from "../Signup/Signup";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (validationErrors.email === "" && validationErrors.password === "") {
      axios.post("http://localhost:8081/login", values)
        .then(res => {
        //   console.log(res);
          if (res.data === "Success") {
            navigate('/loginhome');
          } else {
            alert("Invalid email or password");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <Header />
      <br /> <br /> <br />
      <div id="top">
        <div id="sign_up_page">
          <h2>Log In to Your Udemy Account!</h2>
          <form onSubmit={handleSubmit}>
            <div className="paragraph"></div>
            <input
              id="email"
              className="name"
              type="email"
              placeholder="Email"
              onChange={handleInput}
              name="email"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
            <input
              id="pass"
              className="name"
              type="password"
              placeholder="Password"
              onChange={handleInput}
              name="password"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
            <br /> <br />
            <button type="submit" id="sign-btn" className="sign">
              Log In
            </button>
            <div className="already">
              <h3>OR</h3>
              <Link to="/forgot" className="color_1">
                Forgot Password
              </Link>
            </div>
            <div className="already">
              <h4>Don't have an account?</h4>
              <Link to="/signup" className="color_1">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
