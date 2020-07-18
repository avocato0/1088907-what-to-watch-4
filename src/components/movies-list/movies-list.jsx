import React, {PureComponent} from "react";
import {moviesTypes, onCardClickTypes, countMoviesOnMainPageTypes} from "../../types/types.js";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeMovie: null};
  }

  render() {
    const {movies, maxCountOfVisibleMovies, onCardClick} = this.props;

    const visibleMovies = movies.slice(0, maxCountOfVisibleMovies);

    return (
      <div className="catalog__movies-list">
        {visibleMovies.map((it, i) => {
          return (
            <SmallMovieCard
              key={it.title + i}
              movie={it}
              onCardClick={onCardClick}
              onCardHover={() => {
                this.setState({activeMovie: it});
              }} />
          );
        })}
      </div>
    );
  }
}


MoviesList.propTypes = {
  movies: moviesTypes,
  maxCountOfVisibleMovies: countMoviesOnMainPageTypes,
  onCardClick: onCardClickTypes,
};

export default MoviesList;
