import React, { useState } from 'react';
import './search.css';

const Search = ({ movies, text, setText }) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default Search;
