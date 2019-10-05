import * as api from './api';

export const updateCafe = data => ({
  type: 'UPDATE_CAFE',
  data,
});

export const fetchCafe = (placeID = null) => (dispatch, getState) => {
  api.getCafeById(placeID)
    .then(data => dispatch(updateCafe(data)));
};
