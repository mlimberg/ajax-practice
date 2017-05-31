import React, { Component } from 'react';
import $ from 'jquery';
import JokeList from './JokeList';
import Controls from './Controls';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      qty: 10,
    }
  }


  setQty(qty) {
    //add some codes
  }

  getJokes() {
    //add some codes
  }

  render() {
    let { qty, jokes, showJokes } = this.state;
    return (
      <div>
        <h1>JOKES!</h1>
        <Controls qty={qty}
                  setQty={this.setQty.bind(this)}
                  getJokes={this.getJokes.bind(this)}/>
        <JokeList jokes={jokes} showJokes={showJokes}/>
      </div>
    )
  }
}
