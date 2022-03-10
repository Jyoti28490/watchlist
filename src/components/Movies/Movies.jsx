import React, { useEffect, useState } from 'react';
import './movies.css';
import { useWatchList } from '../../Context/Context';
// import watchListReducer from '../../Context/watchlistReducer';
// import Search from '../Search/Search';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { watchlist, dispatch } = useWatchList();
  const [text, setText] = useState('');

  useEffect(() => fetchMovies(), []);

  const fetchMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=81d10c99c9ae8d59a80e92781bd7fdf7&language=en-US&page=1'
    );
    const dataJson = await data.json();
    console.log(dataJson.results);
    setMovies(dataJson.results);
  };

  const filtered = !text
    ? movies
    : movies.filter((el) =>
        el.title.toLowerCase().includes(text.toLowerCase())
      );

  return (
    <div>
      {/* <Search movies={movies} text={text} setText={setText} /> */}
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
        style={{
          width: '100%',
          height: '2rem',

          outline: 'none',
        }}
      />

      <div className="popular">
        {filtered.map((movie) => (
          <div>
            <h2>{movie.title}</h2>
            <img
              src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
              alt=""
            />
            {watchlist.some((el) => el.id === movie.id) ? (
              <button
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_WATCHLIST',
                    payload: movie,
                  });
                }}
              >
                Remove from Watchlist
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_WATCHLIST',
                    payload: movie,
                  });
                }}
              >
                Add to Watchlist
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
