import React from 'react';
import './topcategory.css';
import Design from '../Assets/Images/design.jpg';
import Marketing from '../Assets/Images/marketing.jpg'
import Development from '../Assets/Images/dev.jpg'
import Music from '../Assets/Images/music.jpg'
import Photography from '../Assets/Images/photography.jpg'
import PersonalDev from '../Assets/Images/personaldev.jpg'
import Business from '../Assets/Images/business.jpg'
import IT from '../Assets/Images/IT.jpg'


const TopCategory = () => {
    return (
        <div className="cat35">
            <p id="ae122">Featured topics by category</p>

            <div>
                <div className="cat36">
                    <div>
                        <img src={Design} alt="cat" />
                        <p>Design</p>
                    </div>
                    <div>
                        <img src={Development} alt="cat" />
                        <p>Development</p>
                    </div>
                    <div>
                        <img src={Marketing} alt="cat" />
                        <p>Marketing</p>
                    </div>
                    <div>
                        <img src={IT} alt="cat" />
                        <p>IT and Software</p>
                    </div>
                    <div>
                        <img src={PersonalDev} alt="cat" />
                        <p>Personal Development</p>
                    </div>
                    <div>
                        <img src={Business} alt="cat" />
                        <p>Business</p>
                    </div>
                    <div>
                        <img src={Photography}alt="cat" />
                        <p>Photography</p>
                    </div>
                    <div>
                        <img src={Music} alt="cat" />
                        <p>Music</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategory;
