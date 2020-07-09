import React from "react";
import {reviewsTypes} from "../../types/types.js";


const createReviewTemplate = (review) => {
  const {comment, author, dateInMs, ratingScore} = review;
  // TODO
  // Перевести дату в человекочитаемый вид

  return (
    <div className="review" key={dateInMs}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{dateInMs}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ratingScore}</div>
    </div>
  );
};

const MovieReviews = (props) => {
  const {reviews} = props;

  const firstPartReviews = reviews.slice(0, reviews.length / 2 + 1);
  const secondPartReviews = reviews.slice(reviews.length / 2 + 1);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstPartReviews.map((review) => createReviewTemplate(review))}
      </div>
      <div className="movie-card__reviews-col">
        {secondPartReviews.map((review) => createReviewTemplate(review))}
      </div>
    </div>
  );
};


MovieReviews.propTypes = {
  reviews: reviewsTypes,
};

export default MovieReviews;
