import React, { useState } from 'react';
import './login.css'; // Import CSS file for login styles
import Header from '../../Componets/Header/Header';
import Footer from '../../Componets/Footer/Footer';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation'; // Corrected import statement

function Login(){
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState([]);

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value})); // Fixed setting value as string, not array
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values)); // Corrected function call to Validation(values)
    };

    return (
        <div>
            <Header />
            <br />  <br />  <br />
            <div id="top">
                <div id="sign_up_page">
                    <h2>Log In to Your Udemy Account!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="paragraph"></div>

                        <input id="email"
                            className="name" type="email" placeholder="Email" onChange={handleInput} name='email' />

                        <span>{errors.email && <span className='text-danger'> {errors.email}</span>}</span> {/* Added missing closing span tag */}

                        <input id="pass" className="name" type="password" placeholder="Password" onChange={handleInput} name='password' />

                        <span>{errors.password && <span className='text-danger'> {errors.password}</span>}</span> {/* Added missing closing span tag */}

                        <button type='submit' id="sign-btn" className="sign">Log In</button>

                        <div className="already">
                            <h3>OR</h3>
                            <Link to="/forgot" className="color_1" >Forgot Password</Link>
                        </div>

                        <div className="already">
                            <h4>Don't have an account?</h4> 
                            <Link to="/signup" className="color_1">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
