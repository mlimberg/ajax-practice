import React from 'react';
import Joke from './Joke';

const JokeList = ({ jokes }) => {
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
