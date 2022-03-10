export const initialState = {
  watchlist: localStorage.getItem('watch')
    ? JSON.parse(localStorage.getItem('watch'))
    : [],
};

const watchListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [...state.watchlist, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter((el) => el.id !== action.payload.id),
      };
    case 'INCREASE_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter((el) =>
          el.id === action.payload.id ? (el.quantity += 1) : el.quantity
        ),
      };

    case 'DECREASE_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter((el) =>
          el.id === action.payload.id ? (el.quantity -= 1) : el.quantity
        ),
      };
    default:
      return state;
  }
};

export default watchListReducer;

// JSON.parse(localStorage.getItem('watchlist')) ||
