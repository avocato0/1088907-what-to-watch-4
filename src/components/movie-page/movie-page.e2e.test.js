import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviePage from "./movie-page.jsx";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import {movieMock, moviesMock, reviewsMock, TabsNameMock} from "../../mocks/test-data.js";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MoviePageComponent`, () => {
  it(`The state changes when the tab is clicked`, () => {
    const tabsName = Object.values(TabsNameMock);

    const moviePage = mount(
        <MoviePage
          movie={movieMock}
          reviews={reviewsMock}
          similarMovies={moviesMock}
          onCardClick={() => {}}
        />
    );

    const tabs = moviePage.find(`a.movie-nav__link`);
    tabs.forEach((tab, i) => {
      tab.simulate(`click`);
      expect(moviePage.state().activeTabItem).toBe(tabsName[i]);
    });
  });

  it(`The correct screen is displayed in each state`, () => {

    const moviePage = mount(
        <MoviePage
          movie={movieMock}
          reviews={reviewsMock}
          similarMovies={moviesMock}
          onCardClick={() => {}}
        />
    );

    moviePage.setState({activeTabItem: TabsNameMock.OVERVIEW});
    expect(moviePage.find(MovieOverview)).toHaveLength(1);

    moviePage.setState({activeTabItem: TabsNameMock.DETAILS});
    expect(moviePage.find(MovieDetails)).toHaveLength(1);

    moviePage.setState({activeTabItem: TabsNameMock.REVIEWS});
    expect(moviePage.find(MovieReviews)).toHaveLength(1);

    moviePage.setState({activeTabItem: ``});
    expect(moviePage.find(MovieOverview)).toHaveLength(1);
  });

});
