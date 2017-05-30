import React, { Component } from 'react';
import $ from 'jquery';
import JokeList from './JokeList';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    $.get('http://api.icndb.com/jokes/random/10?exclude=[nerdy,explicit]', (data) => {
      this.setState({ jokes: data.value })
    })
  }

  render() {

    return (
      <div>
        <h1>JOKES!</h1>
        <JokeList jokes={this.state.jokes}/>
      </div>
    )
  }
}
