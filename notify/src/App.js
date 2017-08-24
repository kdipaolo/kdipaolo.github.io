import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Location, { notify } from 'react-beautiful-notify'

class App extends Component {
  handleClick = () => {
    const options = {
      type: 'confirmation',
      background: '#333',
      mainColor: '#fff'
    }

    function confirm() {
      console.log('confirmation')
    }

    notify.show('Are you sure?', options, confirm)
  }
  render() {
    return (
      <div className="App">
        <Location />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">Click the demo button to see a demo:</p>
        <button onClick={this.handleClick}>Demo</button>
      </div>
    )
  }
}

export default App
