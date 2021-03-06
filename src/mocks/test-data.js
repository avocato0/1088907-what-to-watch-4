import {createRef} from "react";

export const movieMock = {
  id: 1,
  title: `Movie_title-1`,
  genre: `Genre`,
  year: 1111,
  runTimeInSec: 111 * 60,
  poster: {
    image: `Movie_image-1`,
    title: `Movie_title-1`,
  },
  bgPoster: {
    image: `Movie_image-1`,
    title: `Movie_title-1`,
  },
  rating: {
    score: 1.1,
    count: 111
  },
  description: `Description of Movie_title-1.`,
  director: `Director of Movie_title-1.`,
  starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
  preview: `Preview of Movie_title.`,
};

export const moviesMock = [
  {
    id: 11,
    title: `Movie_title-1`,
    genre: `Genre-1`,
    year: 1111,
    runTimeInSec: 111 * 60,
    poster: {
      image: `Movie_image-1`,
      title: `Movie_title-1`,
    },
    bgPoster: {
      image: `Movie_image-1`,
      title: `Movie_title-1`,
    },
    rating: {
      score: 1.1,
      count: 111
    },
    description: `Description of Movie_title-1.`,
    director: `Director of Movie_title-1.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`],
    preview: `Preview of Movie_title-1.`,
  },
  {
    id: 22,
    title: `Movie_title-2`,
    genre: `Genre-2`,
    year: 2222,
    runTimeInSec: 222 * 60,
    poster: {
      image: `Movie_image-2`,
      title: `Movie_title-2`,
    },
    bgPoster: {
      image: `Movie_image-2`,
      title: `Movie_title-2`,
    },
    rating: {
      score: 2.2,
      count: 222
    },
    description: `Description of Movie_title-2.`,
    director: `Director of Movie_title-2.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`],
    preview: `Preview of Movie_title-2.`,
  },
  {
    id: 33,
    title: `Movie_title-3`,
    genre: `Genre-1`,
    year: 3333,
    runTimeInSec: 333 * 60,
    poster: {
      image: `Movie_image-3`,
      title: `Movie_title-3`,
    },
    bgPoster: {
      image: `Movie_image-3`,
      title: `Movie_title-3`,
    },
    rating: {
      score: 3.3,
      count: 333
    },
    description: `Description of Movie_title-3.`,
    director: `Director of Movie_title-3.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-3.`,
  },
  {
    id: 44,
    title: `Movie_title-4`,
    genre: `Genre-4`,
    year: 4444,
    runTimeInSec: 444 * 60,
    poster: {
      image: `Movie_image-4`,
      title: `Movie_title-4`,
    },
    bgPoster: {
      image: `Movie_image-4`,
      title: `Movie_title-4`,
    },
    rating: {
      score: 4.4,
      count: 444
    },
    description: `Description of Movie_title-4.`,
    director: `Director of Movie_title-4.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-4.`,
  },
  {
    id: 55,
    title: `Movie_title-5`,
    genre: `Genre-5`,
    year: 5555,
    runTimeInSec: 555 * 60,
    poster: {
      image: `Movie_image-5`,
      title: `Movie_title-5`,
    },
    bgPoster: {
      image: `Movie_image-5`,
      title: `Movie_title-5`,
    },
    rating: {
      score: 5.5,
      count: 555
    },
    description: `Description of Movie_title-5.`,
    director: `Director of Movie_title-5.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-5.`,
  },
  {
    id: 66,
    title: `Movie_title-6`,
    genre: `Genre-6`,
    year: 6666,
    runTimeInSec: 666 * 60,
    poster: {
      image: `Movie_image-6`,
      title: `Movie_title-6`,
    },
    bgPoster: {
      image: `Movie_image-6`,
      title: `Movie_title-6`,
    },
    rating: {
      score: 6.6,
      count: 666
    },
    description: `Description of Movie_title-6.`,
    director: `Director of Movie_title-6.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-6.`,
  },
  {
    id: 77,
    title: `Movie_title-7`,
    genre: `Genre-7`,
    year: 7777,
    runTimeInSec: 777 * 60,
    poster: {
      image: `Movie_image-7`,
      title: `Movie_title-7`,
    },
    bgPoster: {
      image: `Movie_image-7`,
      title: `Movie_title-7`,
    },
    rating: {
      score: 7.7,
      count: 777
    },
    description: `Description of Movie_title-7.`,
    director: `Director of Movie_title-7.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-7.`,
  },
  {
    id: 88,
    title: `Movie_title-8`,
    genre: `Genre-8`,
    year: 8888,
    runTimeInSec: 888 * 60,
    poster: {
      image: `Movie_image-8`,
      title: `Movie_title-8`,
    },
    bgPoster: {
      image: `Movie_image-8`,
      title: `Movie_title-8`,
    },
    rating: {
      score: 8.8,
      count: 888
    },
    description: `Description of Movie_title-8.`,
    director: `Director of Movie_title-8.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-8.`,
  },
  {
    id: 99,
    title: `Movie_title-9`,
    genre: `Genre-9`,
    year: 9999,
    runTimeInSec: 999 * 60,
    poster: {
      image: `Movie_image-9`,
      title: `Movie_title-9`,
    },
    bgPoster: {
      image: `Movie_image-9`,
      title: `Movie_title-9`,
    },
    rating: {
      score: 9.9,
      count: 999
    },
    description: `Description of Movie_title-9.`,
    director: `Director of Movie_title-9.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-9.`,
  },
  {
    id: 1010,
    title: `Movie_title-10`,
    genre: `Genre-10`,
    year: 1010,
    runTimeInSec: 101 * 60,
    poster: {
      image: `Movie_image-10`,
      title: `Movie_title-10`,
    },
    bgPoster: {
      image: `Movie_image-10`,
      title: `Movie_title-10`,
    },
    rating: {
      score: 10,
      count: 101
    },
    description: `Description of Movie_title-10.`,
    director: `Director of Movie_title-10.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-10.`,
  },
  {
    id: 1111,
    title: `Movie_title-11`,
    genre: `Genre-11`,
    year: 1111,
    runTimeInSec: 111 * 60,
    poster: {
      image: `Movie_image-11`,
      title: `Movie_title-11`,
    },
    bgPoster: {
      image: `Movie_image-11`,
      title: `Movie_title-11`,
    },
    rating: {
      score: 1.2,
      count: 111
    },
    description: `Description of Movie_title-11.`,
    director: `Director of Movie_title-11.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-11.`,
  },
];

export const reviewsMock = [
  {
    movieId: 11,
    author: `Reviewer-1`,
    dateUTC: new Date(`2011-01-01T14:13:56.123Z`),
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-2`,
    dateUTC: new Date(`2012-02-02T16:16:56.123Z`),
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-3`,
    dateUTC: new Date(`2013-03-03T03:03:56.123Z`),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-4`,
    dateUTC: new Date(`2014-04-04T11:11:56.123Z`),
    ratingScore: 5.0,
    comment: `Comment Author-4 to Movie-11.`,
  },
  {
    movieId: 22,
    author: `Reviewer-1`,
    dateUTC: new Date(`2015-05-05T17:17:56.123Z`),
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-2`,
    dateUTC: new Date(`2016-06-06T11:11:56.123Z`),
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-3`,
    dateUTC: new Date(`2017-07-07T06:06:56.123Z`),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-4`,
    dateUTC: new Date(`2018-08-08T15:15:56.123Z`),
    ratingScore: 4.0,
    comment: `Comment Author-4 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-5`,
    dateUTC: new Date(`2019-09-09T14:14:56.123Z`),
    ratingScore: 5.0,
    comment: `Comment Author-5 to Movie-22.`,
  },
  {
    movieId: 33,
    author: `Reviewer-3`,
    dateUTC: new Date(`2020-10-10T02:02:56.123Z`),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-33.`,
  },
];

export const promoMovieMock = {
  id: 555,
  title: `Movie_title`,
  genre: `Genre`,
  year: 5555,
  runTimeInSec: 55 * 60,
  poster: {
    image: `Movie_image`,
    title: `Movie_title`,
  },
  bgPoster: {
    image: `Movie_image`,
    title: `Movie_title`,
  },
  rating: {
    score: 5.5,
    count: 555
  },
  description: `Description of Movie_title.`,
  director: `Director of Movie_title.`,
  starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`, `Starring-6`],
  preview: `Preview of Movie_title.`,
};

export const promoMovieReviewsMock = [
  {
    movieId: 555,
    author: `Reviewer-11`,
    dateUTC: new Date(`2021-11-11T20:20:56.123Z`),
    ratingScore: 10.0,
    comment: `Comment Author-11 to Movie-555.`,
  },
  {
    movieId: 555,
    author: `Reviewer-22`,
    dateUTC: new Date(`2022-12-12T10:10:56.123Z`),
    ratingScore: 9.0,
    comment: `Comment Author-22 to Movie-555.`,
  },
  {
    movieId: 555,
    author: `Reviewer-33`,
    dateUTC: new Date(`2023-07-31T01:01:56.123Z`),
    ratingScore: 8.0,
    comment: `Comment Author-33 to Movie-555.`,
  },
];

export const TabsNameMock = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const allGenresMock = [`Genre-1`, `Genre-2`, `Genre-3`, `Genre-4`, `Genre-5`, `Genre-6`, `Genre-7`, `Genre-8`, `Genre-9`, `Genre-10`, `Genre-11`];

export const activeGenreMock = `Genre-2`;

export const countMoviesOfActiveGenreMock = moviesMock.length;

export const countOfVisibleMoviesOnMainPageMock = 8;

export const posterMock = {
  image: `Movie_image-1`,
  title: `Movie_title-1`,
};

export const videoRefMock = createRef();
