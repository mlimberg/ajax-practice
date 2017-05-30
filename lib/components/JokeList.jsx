import React from 'react';
import Joke from './Joke';

const JokeList = ({ jokes }) => {
  if(!jokes.length) {
    return (
      <p>No Jokes, so sad!</p>
    )
  }

  return (
    <div>
      <ul>
        {
          jokes.map(joke => {
            return <Joke joke={joke} key={joke.id}/>
          })
        }
      </ul>
    </div>
  )
}

export default JokeList;
