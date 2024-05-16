import React, { useState } from 'react';
import './signup.css'; // Import CSS file for Fup styles
import Footer from '../../Componets/Footer/Footer';
import Header from '../../Componets/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';


function Signup(){
    const [values, setValues] = useState({
        name:'',
        email: '',
        password: ''
    });

    const {navigate} = this.props.navigation;
    const [errors, setErrors] = useState([]);

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value})); // Fixed setting value as string, not array
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (err.name === "" && err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => 
                    {
                    console.log(res);
                    navigate('/login');
                })
                .catch(err => console.log(err)); // Change err to error and log error object
        }
    };
    

    return (
        <div>
         <Header />
        <div id="sign_up_page">
        <br />  <br />  <br />
            <h2>Sign Up and Start Learning! </h2>
            <form action='' onSubmit={handleSubmit}>
        
            <input id="name" className="name" type="text" name="name" placeholder="Full Name" onChange={handleInput} />

            <span>{errors.name && <span className='text-danger'> {errors.name}</span>}</span> {/* Added missing closing span tag */}

<input id="email" className="name" type="email" placeholder="Email" name="email" onChange={handleInput} />

<span>{errors.email && <span className='text-danger'> {errors.email}</span>}</span> {/* Added missing closing span tag */}

<input id="pass" className="name" type="password" placeholder="Password" name="password" onChange={handleInput} />

<span>{errors.password && <span className='text-danger'> {errors.password}</span>}</span> {/* Added missing closing span tag */}

            <br />
        

            <button type='submit' id="sign-btn" className="sign">Sign Up</button>
        
        <p>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
        <div></div>
        <div className="already">
            <h3>Already have an account?</h3>
            <Link to="/login" className="color_1">Log In</Link>        </div> 
            </form>
    </div>
    <br />  <br />  <br />
      <Footer /> 
      </div>
    );
    
};

export default Signup;
