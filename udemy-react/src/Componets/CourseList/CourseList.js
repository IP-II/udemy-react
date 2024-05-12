import React from 'react';

function CourseList({ id, title, instructorName, stars, comments, ratings, price, image, isBestSeller }) {
  return (
    <div className="course">
      <img src={image} alt={title} className="course__image" />
      <div className="course__info">
        <h3 className="course__title">{title}</h3>
        <p className="course__instructor">Instructor: {instructorName}</p>
        <div className="course__rating">
          <span className="course__stars">Stars: {stars}</span>
          <span className="course__comments">Comments: {comments}</span>
          <span className="course__ratings">Ratings: {ratings}</span>
        </div>
        <p className="course__price">Price: {price}</p>
        {isBestSeller && <span className="course__best-seller">Best Seller</span>}
      </div>
    </div>
  );
}

export default CourseList;
