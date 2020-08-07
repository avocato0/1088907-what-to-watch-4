import React from "react";
import {AppRoute, AuthorizationStatus} from "../../utils/const";
import {movieTypes, authorizationStatusTypes, isFavoriteTypes, onMyListButtonClickTypes} from "../../types/types";
import {Link} from "react-router-dom";
import withFavoriteMovie from "../../hocs/with-favorite-movie/with-favorite-movie.jsx";

const MovieButtons = (props) => {
  const {authorizationStatus, movie, isFavorite, onMyListButtonClick} = props;
  return (
    <div className="movie-card__buttons">
      <Link to={`${AppRoute.PLAYER_PAGE}/${movie.id}`} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list movie-card__button" type="button" onClick={onMyListButtonClick}>
        {isFavorite
          ? <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          : <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        }
        <span>My list</span>
      </button>

      {authorizationStatus === AuthorizationStatus.AUTH
        ? <Link to={`${AppRoute.MOVIE_PAGE}/${movie.id}${AppRoute.ADD_REVIEW_PAGE}`} className="btn movie-card__button">Add review</Link>
        : ``
      }

    </div>
  );
};


MovieButtons.propTypes = {
  movie: movieTypes,
  authorizationStatus: authorizationStatusTypes,
  isFavorite: isFavoriteTypes,
  onMyListButtonClick: onMyListButtonClickTypes,
};


export default withFavoriteMovie(MovieButtons);
