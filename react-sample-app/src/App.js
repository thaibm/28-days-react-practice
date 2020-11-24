import React from 'react';
import './App.css';
import Person from './components/person/Person';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Sample App</h1>
        <Person name="Iron man">Love you 3000!</Person>
      </div>
    );
  }
}

export default App;
