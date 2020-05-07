import React, { Component } from 'react'
import './App.css';
import Tooltip from './components/Tooltip';



export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      input: ""
    }
  }


  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Input position of tooltip</h1><br></br>
        <input
          type='text'
          value={this.state.input}
          onChange={this.handleInput}
        />
        <Tooltip pos={this.state.input} />
      </div>
    )
  }
}

export default App

