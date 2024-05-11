import React from 'react';
import './courses.css'
const Courses = () => {
    const webx1 = () => {
        // Function for handling Web Development click event
    };

    return (
        <div className="consn5">
            <div>
                <p id="ae1">A broad selection of courses</p>
                <p id="ae2">Choose from 204,000 online video courses with new additions published every month</p>
            </div>

            <div id="ae3">
                <span id="jpy">Python</span>
                <span id="jex">Excel</span>
                <span id="jwe" onClick={webx1}>Web Development</span>
                <span id="jja">JavaScript</span>
                <span id="jda">Data Science</span>
                <span id="jaw">AWS Certification</span>
                <span id="jdr">Drawing</span>
            </div>

            {/* <span id="ae3i" className="material-symbols-outlined">arrow_forward_ios</span> */}

            <div className="aex4">
                <div>
                    <p id="ae4">Expand your career opportunities with Python</p>
                    <p id="ae5">Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple
                    syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to
                    build everything from games to sites to apps. Choose from a range of courses....</p>
                </div>

                <div>
                    <a id="ae6" href="#"><button id="ae7">Explore Python</button></a>
                </div>
            </div>
        </div>
    );
};

export default Courses;
