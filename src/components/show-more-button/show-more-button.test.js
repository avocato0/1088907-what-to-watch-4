import React from "react";
import renderer from "react-test-renderer";
import {ShowMoreButton} from "./show-more-button.jsx";
import {countOfVisibleMoviesOnMainPageMock, countMoviesOfActiveGenreMock, moviesMock, activeGenreMock} from "../../mocks/test-data.js";
import {onShowMoreButtonClickTypes} from "../../types/types.js";


describe(`ShowMoreButton`, () => {
  it(`Render ShowMoreButton`, () => {
    const tree = renderer
      .create(
          <ShowMoreButton
            maxCountOfVisibleMovies={countOfVisibleMoviesOnMainPageMock}
            countMoviesOfActiveGenre={countMoviesOfActiveGenreMock}
            onShowMoreButtonClick={onShowMoreButtonClickTypes}
            movies={moviesMock}
            activeGenre={activeGenreMock}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
