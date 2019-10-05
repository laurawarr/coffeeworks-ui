const defaultState = {};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_CAFE':
      return {
        ...state,
        ...action.data,
      };
    default:
      return state
  }
}
