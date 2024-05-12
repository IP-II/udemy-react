import React from 'react';
import './login.css'; // Import CSS file for login styles
import Header from '../../Componets/Header/Header';
import Footer from '../../Componets/Footer/Footer';

const Login = () => {
    const checkUser = (event) => {
        // Your login logic here
    };

    return (
        <div>
        <Header />
        <div id="top">
            <div id="sign_up_page">
                <h2>Log In to Your Udemy Account!</h2>
                <div className="paragraph"></div>

                <input id="email" className="name" type="email" placeholder="Email" />
                <input id="pass" className="name" type="password" placeholder="Password" />

                <button id="sign-btn" onClick={checkUser} className="sign">Log In</button>

                <div className="already">
                    <h4>OR</h4>
                    <h4><a className="color_1" href="signup.html">Forgot Password</a></h4>                </div>

                {/* <div></div> */}
                <div className="already">
                    <h4>Don't have an account?</h4>
                    <h4><a className="color_1" href="signup.html">Sign Up</a></h4>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Login;
