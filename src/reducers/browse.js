import { ICONS } from '../components/Browse/Map';

const defaultState = {
  cafes: [],
  map: null,
  mapConfig: {
    // center: { lat: 49.2795334, lng: -123.10833740000001 },
    center: { lat: 43.646185, lng: -79.391078 },
    zoom: 15,
  },
}

const storedMapConfig = window.localStorage.getItem('mapConfig');
if (storedMapConfig) {
 defaultState.mapConfig = JSON.parse(storedMapConfig);
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_BROWSE_CAFE_LIST': {
      const { Marker } = window.google.maps;
      state.cafes.forEach(cafe => cafe.marker.setMap(null));
      return {
        ...state,
        cafes: action.data.map((cafe) => {
          const marker = new Marker({
            position: cafe.location,
            map: state.map,
            icon: ICONS.default,
          });
          return { ...cafe, marker };
        }),
      };
    }
    case 'UPDATE_BROWSE_MAP':
      return {
        ...state,
        cafes: state.cafes.map((cafe) => {
          cafe.marker.setMap(action.map);
          return { ...cafe, marker: cafe.marker };
        }),
        map: action.map,
      };
    case 'UPDATE_BROWSE_MAP_CONFIG':
      window.localStorage.setItem('mapConfig', JSON.stringify(action.data));
      return {
        ...state,
        mapConfig: action.data,
      };
    default:
      return state
  }
}
