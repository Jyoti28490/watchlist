import { createContext, useReducer, useContext, useEffect } from 'react';
import watchListReducer, { initialState } from './watchlistReducer';

const WatchListContext = createContext(initialState);

export const WatchListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(watchListReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watch', JSON.stringify(state.watchlist));
  }, [state]);

  const value = {
    watchlist: state.watchlist,
    dispatch,
  };

  return (
    <WatchListContext.Provider value={value}>
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => {
  return useContext(WatchListContext);
};
