import React, { useState } from 'react';
import './carousel.css'; // Import CSS file for carousel styles
import Slide1 from '../Assets/Images/slide1.jpg';
import Slide2 from '../Assets/Images/slide2.jpg';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPrevSlide = () => {
        const prevSlide = (currentSlide - 1 + 2) % 2; // 2 is the total number of slides
        setCurrentSlide(prevSlide);
    };

    const goToNextSlide = () => {
        const nextSlide = (currentSlide + 1) % 2; // 2 is the total number of slides
        setCurrentSlide(nextSlide);
    };

    return (
        <div className="carousel">
            <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
            <div className="slide" style={{ display: currentSlide === 0 ? 'flex' : 'none' }}>
                <div className="image">
                    <img src={Slide1} alt="" />
                </div>
                <div className="content">
                    <p className="title">Learning that gets you</p>
                    <p className="description">Skills for your present (and your future). Get started with us </p>
                </div>
            </div>
            <div className="slide" style={{ display: currentSlide === 1 ? 'flex' : 'none' }}>
                <div className="image">
                    <img src={Slide2} alt="" />
                </div>
                <div className="content">
                    <p className="title">Skills that drive you forward</p>
                    <p className="description">Technology and the world of work changes fast -with us, you're faster. Get the skills to achieve goals and stay competitive</p>
                    <br />
                    <div className='slide2-link'>
                        <a href='#'>Plan for organizations</a>
                    </div>
                </div>
            </div>
            <button className="next" onClick={goToNextSlide}>&#10095;</button>
        </div>
    );
};

export default Carousel;
