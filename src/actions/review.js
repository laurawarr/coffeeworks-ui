import * as api from './api';
import { push } from 'connected-react-router';

export const updateReviewSlide = index => ({
  type: 'UPDATE_REVIEW_SLIDE',
  index,
});

export const updateReviewField = (value, key) => ({
  type: 'UPDATE_REVIEW_FIELD',
  value,
  key,
});

export const resetReviewState = () => ({
  type: 'RESET_REVIEW_STATE',
});

export const submitReview = () => (dispatch, getState) => {
  const { review, cafe } = getState();
  const { foodOptionsLevel } = review.fields;
  const data = {
    ...review.fields,
    foodOptionsLevel: ['default', 'unknown'].includes(foodOptionsLevel) ? null : parseInt(foodOptionsLevel),
    placeID: cafe.placeID,
  };
  api.postReview(data)
    .then((res) => {
      console.log(res);
      dispatch(push('/'));
    });
}