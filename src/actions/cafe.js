import * as api from './api';

export const updateCafe = data => ({
  type: 'UPDATE_CAFE',
  data,
});

export const resetCafe = () => ({
  type: 'RESET_CAFE'
});

export const fetchCafe = (placeID = null) => (dispatch, getState) => {
  api.getCafeById(placeID)
    .then((data) => {
      if (data) {
        dispatch(updateCafe(data));
      } else {
        dispatch(resetCafe(data));
      }
    });
};
