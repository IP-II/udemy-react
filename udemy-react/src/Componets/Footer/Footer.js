import React from 'react';
import './footer.css';
import FooterLogo from '../../Assets/Images/footer-logo.svg'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Footer = () => {
    return (
        <div className="footersiz1">
            <div className="footbox1">
                <div id="langsz1">
                    <div id="google_translate_element"></div>
                    <span id="go1" className="material-symbols-outlined"><LanguageOutlinedIcon /></span>
                    <span>English</span>
                </div>
                <div>
                    <a href="#"><span>Udemy Business</span></a>
                    <a href="#"><span>Teach on Udemy</span></a>
                    <a href="#"><span>Get the app</span></a>
                    <a href="#"><span>About us</span></a>
                    <a href="#"><span>Contact us</span></a>
                </div>
                <div>
                    <a href="#"><span>Careers</span></a>
                    <a href="#"><span>Blog</span></a>
                    <a href="#"><span>Help and Support</span></a>
                    <a href="#"><span>Affiliate</span></a>
                    <a href="#"><span>Investors</span></a>
                </div>
                <div>
                    <a href="#"><span>Terms</span></a>
                    <a href="#"><span>Privacy Policy</span></a>
                    <a href="#"><span>Cookie settings</span></a>
                    <a href="#"><span>Sitemap</span></a>
                    <a href="#"><span>Accessibility statement</span></a>
                </div>
            </div>
            <div className="footbox2">
                <div><img id="imgslogo1" src={FooterLogo}alt="logo" /></div>
                <div>
                    <span id="copy1" className="material-symbols-outlined"></span>
                    <span id="copy2">&copy; 2024 Udemy, Inc.</span>

                </div>
            </div>
        </div>
    );
};

export default Footer;
