import {ActionType} from "../../../utils/const.js";


export const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  loadPromoMovie: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie,
    };
  },
  changeStatusOfSendingReview: (status) => {
    return {
      type: ActionType.CHANGE_STATUS_OF_SENDING_REVIEW,
      payload: status,
    };
  },
};
