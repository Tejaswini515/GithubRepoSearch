import React, { Component } from 'react';
import Fetch from './Containers/Fetch';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-headerTitle">Github Search</h1>
        </header>
        <main className="App-main">
          <h3 className="App-title">Github-Search</h3>
          <Fetch/>
        </main>
      </div>
    );
  }
}

export default App;
