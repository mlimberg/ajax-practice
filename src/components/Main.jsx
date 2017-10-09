import React, { Component } from 'react';
import $ from 'jquery';
import JokeList from './JokeList';
import Controls from './Controls';
import getData from '../getData';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      favorites: [],
      qty: 10,
      showJokes: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    getData(`http://api.icndb.com/jokes/random/${this.state.qty}?exclude=[explicit]`)
    .then(data => this.setState({ jokes: data.value }))
  }

  setQty(qty) {
    this.setState({ qty: parseInt(qty) })
  }

  getJokes() {
    this.setState({ showJokes: true }, () => {
      this.getData()
    })
  }

  addFavorite(joke) {
    const favorites = [...this.state.favorites]
    favorites.push(joke)
    this.setState({ favorites: favorites })
  }

  render() {
    let { qty, jokes, showJokes } = this.state;
    return (
      <div>
        <h1>JOKES!</h1>
        <Controls qty={qty}
                  setQty={this.setQty.bind(this)}
                  getJokes={this.getJokes.bind(this)} />
        <JokeList jokes={jokes}
                  showJokes={showJokes}
                  addFavorite={this.addFavorite.bind(this)}/>
      </div>
    )
  }
}
