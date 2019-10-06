const defaultState = {
  slideIndex: 0,
  slideCount: 5,
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_REVIEW_SLIDE':
      return {
        ...state,
        slideIndex: action.index,
      };
    case '@@router/LOCATION_CHANGE':
    default:
      return state
  }
}
