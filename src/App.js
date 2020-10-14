import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      current: '',
      previous: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <input className="result" type="text" value={this.state.current} />
      </div>
    )
  }
}

export default App;
