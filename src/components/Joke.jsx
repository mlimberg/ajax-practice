import React from 'react';

const Joke = ({ joke, addFavorite }) => {
  return (
      <li key={joke.id}>{joke.joke}
        <button onClick={() => addFavorite(joke)}>Add Fav</button>
      </li>
  )
}

export default Joke;
