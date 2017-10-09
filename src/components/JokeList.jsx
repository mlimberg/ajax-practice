import React from 'react';
import Joke from './Joke';

const JokeList = ({ jokes, showJokes, addFavorite }) => {
  const jokeCards = jokes.map(joke => (
    <Joke joke={joke} key={joke.id} addFavorite={addFavorite} />
  ))

  return (
    <div>
      <ul>
        { jokes.length ? jokeCards : <p>Click to add some jokes!</p> }
      </ul>
    </div>
  )
}

export default JokeList;
