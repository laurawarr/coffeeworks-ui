const defaultState = {
  slide: 'forward',
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_SLIDE_DIRECTION':
      return {
        ...state,
        slide: action.direction,
      };
    case '@@router/LOCATION_CHANGE':
    default:
      return state
  }
}
