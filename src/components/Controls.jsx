import React from 'react';

const Controls = ({ qty, setQty, getJokes }) => {
  return (
    <div className='controls'>
      <input type='text'
             placeholder={qty}
             onChange={(e) => setQty(e.target.value)}/>

      <button onClick={getJokes}>Get Jokes</button>
    </div>
  )
}

export default Controls;
