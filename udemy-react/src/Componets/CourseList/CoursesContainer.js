import './coursecontainer.css';
import React, { useRef, useState, useEffect } from 'react';
import CourseList from './CourseList'; // Import the Course component
import jsonData from './courseslist.json';

function CoursesContainer() {
  const containerRef = useRef(null);
  const [scrollLeftDisabled, setScrollLeftDisabled] = useState(true);
  const [scrollRightDisabled, setScrollRightDisabled] = useState(false);

  useEffect(() => {
    // Check if scrolling to the left is possible
    const handleScroll = () => {
      const container = containerRef.current;
      if (container.scrollLeft > 0) {
        setScrollLeftDisabled(false);
      } else {
        setScrollLeftDisabled(true);
      }
      // Check if scrolling to the right is possible
      if (container.scrollLeft < container.scrollWidth - container.clientWidth) {
        setScrollRightDisabled(false);
      } else {
        setScrollRightDisabled(true);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.offsetWidth / 2, // Scroll left by half of the container width
      behavior: 'smooth',
    });
  };
  
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.offsetWidth / 2, // Scroll right by half of the container width
      behavior: 'smooth',
    });
  };
  

  return (
    <div className="courses-container">
      <button className={`nav-button ${scrollLeftDisabled ? 'disabled' : ''}`} onClick={scrollLeft} disabled={scrollLeftDisabled}>
        {'<'}
      </button>
      <div className="courses" ref={containerRef}>
        {jsonData.map((course) => (
          <CourseList
            key={course.id}
            id={course.id}
            title={course.title}
            instructorName={course.instructorName}
            stars={course.stars}
            comments={course.comments}
            ratings={course.ratings}
            price={course.price}
            image={course.image}
            isBestSeller={course.isBestSeller}
          />
        ))}
      </div>
      <button className={`nav-button ${scrollRightDisabled ? 'disabled' : ''}`} onClick={scrollRight} disabled={scrollRightDisabled}>
        {'>'}
      </button>
    </div>
  );
}

export default CoursesContainer;
