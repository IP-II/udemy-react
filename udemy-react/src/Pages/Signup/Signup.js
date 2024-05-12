import React from 'react';
import './signup.css'; // Import CSS file for Fup styles
import Footer from '../../Componets/Footer/Footer';
import Header from '../../Componets/Header/Header';


const Signup = () => {
    const signupform = (event) => {
        // Your signup form logic here
    };

    return (
        <div>
         <Header />
        <div id="sign_up_page">
        
            <h2>Sign Up and Start Learning! </h2>
            <div></div>
        
            <input id="name" className="name" type="text" placeholder="Full Name" />
            
            <input id="email" className="name" type="email" placeholder="Email" />
        
            <input id="pass" className="name" type="password" placeholder="Password" />
            <div id="alert"></div>
            <br />
            <button id="sign-btn" onClick={signupform} className="sign">Sign Up</button>
        
        <p>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
        <div></div>
        <div className="already">
            <h3>Already have an account?</h3>
            <h3><a className="color_1" href="login.html">Log In</a></h3> 
        </div> 
       
    </div>
    <br />  <br />  <br />
      <Footer /> 
      </div>
    );
    
};

export default Signup;
