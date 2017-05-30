import React, { Component } from 'react';
import $ from 'jquery';
import JokeList from './JokeList';
import Controls from './Controls';

// export default class Main extends Component {
//   constructor() {
//     super()
//     this.state = {
//       jokes: [],
//       qty: 10,
//       showJokes: false
//     }
//   }
//
//   componentDidMount() {
//     this.getData()
//   }
//
//   getData() {
//     $.get(`http://api.icndb.com/jokes/random/${this.state.qty}?exclude=[explicit]`, (data) => {
//       this.setState({ jokes: data.value })
//     })
//   }
//
//   setQty(qty) {
//     this.setState({ qty: parseInt(qty) })
//   }
//
//   getJokes() {
//     this.setState({ showJokes: true }, () => {
//       this.getData()
//     })
//   }
//
//   render() {
//     let { qty, jokes, showJokes } = this.state;
//     return (
//       <div>
//         <h1>JOKES!</h1>
//         <Controls qty={qty}
//                   setQty={this.setQty.bind(this)}
//                   getJokes={this.getJokes.bind(this)} />
//         <JokeList jokes={jokes} showJokes={showJokes}/>
//       </div>
//     )
//   }
// }

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0,
      num: 0
    }
  }

  updateCounts() {
    this.setState({ count: this.state.num })
    this.setState({ count2: this.state.count * 2})
  }

  render() {
    return (
      <div>
        <div className='counts'>
          <h3>Count: <span className='count-box'>{this.state.count}</span></h3>
          <h3>Count 2: <span className='count-box'>{this.state.count2}</span></h3>
        </div>

        <div className='controls'>
          <input onChange={(e) => this.setState({ num: parseInt(e.target.value) })} />
          <button onClick={this.updateCounts.bind(this)}>Update Count</button>
        </div>
      </div>
    )
  }
}
