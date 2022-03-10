import React from 'react';
import './watchlist.css';
import { useWatchList } from '../../Context/Context';

const Watchlist = () => {
  const { watchlist, dispatch } = useWatchList();
  const totalMovies = watchlist.reduce((acc, cv) => cv.quantity + acc, 0);
  if (watchlist.length === 0) return <p>No Movies added yet !</p>;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '6rem',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontSize: '3rem',
            color: 'blue',
            fontWeight: 'bold',
            textAlign: 'center',
            backdropFilter: 'blur(15px)',
            background: 'rgba(167, 111, 219, 0.3)',
            height: '4.5rem',
            width: '10rem',
            borderRadius: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {totalMovies}
        </p>
      </div>
      <div className="watchlist">
        {watchlist.length > 0 &&
          watchlist.map((movie) => (
            <div>
              <h2>{movie.title}</h2>
              <img
                src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
                alt=""
              />
              <div className="action_buttons">
                <button
                  className="remove_button"
                  onClick={() => {
                    dispatch({
                      type: 'REMOVE_FROM_WATCHLIST',
                      payload: movie,
                    });
                  }}
                >
                  Remove from Watchlist
                </button>
                <div className="quantity_buttons">
                  <button
                    onClick={() => {
                      dispatch({
                        type: 'INCREASE_WATCHLIST',
                        payload: movie,
                      });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: 'DECREASE_WATCHLIST',
                        payload: movie,
                      });
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <p
                style={{
                  width: '100%',
                  background: 'linear-gradient(#fd297b, #ff655b)',
                  height: '2.5rem',
                  borderRadius: '3rem',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  // color: 'white',
                  textAlign: 'center',
                }}
              >
                {movie.quantity}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Watchlist;
