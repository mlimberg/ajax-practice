import React from 'react';

const Controls = ({ qty }) => {

  return (
    <div className='controls'>
      <input type='number'
             placeholder={qty}
             onChange={(e) => this.setState({ qty: parseInt(e.target.value) })}/>
      <button>Get Jokes</button>
    </div>
  )
}

export default Controls;
