const defaultState = null;

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_CAFE':
      return {
        ...state,
        ...action.data,
      };
    case 'RESET_CAFE':
      return defaultState;
    default:
      return state
  }
}
