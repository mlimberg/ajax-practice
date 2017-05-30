import React from 'react';

const Joke = ({ joke }) => {
  return (
    <li key={joke.id}>{joke.joke}</li>
  )
}

export default Joke;
