const defaultState = {
  slideIndex: 0,
  slideCount: 5,
  fields: {
    badges: {
      beverages: false,
      service: false,
      food: false,
      wifi: false,
      seating: false,
      outlets: false,
    },
    wifiSpeed: 2,
    wifiRestrictions: 2,
    beverageSelection: 2,
    beverageQuality: 2,
    noiseLevel: 2,
    foodOptionsLevel: 'default',
  }
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_REVIEW_SLIDE':
      return {
        ...state,
        slideIndex: action.index,
      };
    case 'UPDATE_REVIEW_FIELD':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.key]: action.value,
        },
      };
    case 'RESET_REVIEW_STATE':
      return defaultState;
    case '@@router/LOCATION_CHANGE':
    default:
      return state
  }
}
