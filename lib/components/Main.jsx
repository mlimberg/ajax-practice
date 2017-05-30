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

  componentDidMount() {
    this.getData()
  }

  getData() {
    $.get(`http://api.icndb.com/jokes/random/${this.state.qty}?exclude=[explicit]`, (data) => {
      this.setState({ jokes: data.value })
    })
  }

  render() {
    let { qty, jokes } = this.state;
    return (
      <div>
        <h1>JOKES!</h1>
        <Controls qty={qty}/>
        <JokeList jokes={jokes}/>
      </div>
    )
  }
}
