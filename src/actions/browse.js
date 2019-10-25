import * as api from './api';
import { getIcons } from '../components/Browse/Map';

export const updateBrowseCafeList = data => ({
  type: 'UPDATE_BROWSE_CAFE_LIST',
  data,
});

export const updateBrowseMap = map => ({
  type: 'UPDATE_BROWSE_MAP',
  map,
});

export const updateBrowseMapConfig = data => ({
  type: 'UPDATE_BROWSE_MAP_CONFIG',
  data,
});

export const browseCafes = (coords = null) => (dispatch, getState) => {
  const { lat, lng } = coords || getState().browse.mapConfig.center;
  api.getCafes(lat, lng)
    .then(data => dispatch(updateBrowseCafeList(data)));
}

export const updateMap = config => (dispatch) => {
  dispatch(updateBrowseMapConfig(config));
  browseCafes(config.center);
}

export const hoverCafeCard = (placeID = null) => (dispatch, getState) => {
  const { cafes } = getState().browse;
  cafes.forEach(cafe => cafe.marker.setIcon(getIcons().default));
  const targetCafe = cafes.find((cafe) => cafe.placeID === placeID);
  if (targetCafe) targetCafe.marker.setIcon(getIcons().pin);
};

export const hoverCafeMarker = (placeID = null) => (dispatch, getState) => {
  const { cafes } = getState().browse;
  cafes.forEach(cafe => cafe.marker.setIcon(getIcons().default));
  const targetCafe = cafes.find((cafe) => cafe.placeID === placeID);
  if (targetCafe) targetCafe.marker.setIcon(getIcons().hover);
};
