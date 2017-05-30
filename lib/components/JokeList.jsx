import React from 'react';
import Joke from './Joke';

const JokeList = ({ jokes }) => {
  if(!jokes.length) {
    return (
      <div>No Jokes, so sad!</div>
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
