import React from 'react';
import Joke from './Joke';

const JokeList = ({ jokes, showJokes }) => {
  if(!jokes.length) {
    return (
      <p>Click to add some jokes!</p>
    )
  }

  return (
    <div>
      <ul>
        {/* need some jokes here! */}
      </ul>
    </div>
  )
}

export default JokeList;
