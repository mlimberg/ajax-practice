import React from 'react';
import Joke from './Joke';

const JokeList = ({ jokes, showJokes, addFavorite }) => {
  if(!jokes.length || !showJokes) {
    return (
      <p>Click to add some jokes!</p>
    )
  }

  return (
    <div>
      <ul>
        {jokes.map(joke => {
            return <Joke joke={joke}
                         key={joke.id}
                         addFavorite={addFavorite}/>
          })
        }
      </ul>
    </div>
  )
}

export default JokeList;
