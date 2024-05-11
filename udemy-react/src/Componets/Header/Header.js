import React from 'react';
import './header.css'
import logo from '../../Assets/Images/logo-udemy.svg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
const Header = () => {
    return (
        <header>
            <div className="navbarsz">
                <div className="navsz1">
                    <a href="./index.html"><img id="imgslogo1" src={logo} alt="logo" width="100"/></a>
                    <div className="jshv1">
                        <a href="#"><span>Categories</span></a>
                    </div>
                </div>
                <div className="navsz2">
                    <span id="searchIcon" className="material-symbols-outlined"><SearchOutlinedIcon /></span>
                    <input className="myin1" type="text" name="search" id="search" placeholder="Search for anything" />
                </div>
                <div className="navsz3">
                    <a href="#"><span id="sz-7">Udemy Business</span></a>
                    <a href="#"><span id="sz-8">Tech on Udemy</span></a>
                    <a href="#"><span id="ssz1p" className="material-symbols-outlined"><ShoppingCartOutlinedIcon /></span></a>
                    <a href="login.html"><span id="sz4">Login</span></a>
                    <a href="signup.html"><span id="sz5">Sign up</span></a>
                    <a href="#"><span id="sz6" className="material-symbols-outlined"><LanguageOutlinedIcon /></span></a>
                </div>
            </div>
        </header>
    );
}
export default Header;