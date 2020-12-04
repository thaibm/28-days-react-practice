import React, { useState } from 'react';
// import React from 'react';
import './App.css';
import Person from './components/person/Person';

const App = () => {
  // State Declaration
  const [person, setPerson] = useState({ name: 'Iron man' });
  const [showPerson, setShowPerson] = useState(false);
  const [statement] = useState('Love you 3000!');

  const changePerson = () => {
    setPerson({ name: 'Morgan Stark' });
  };

  const changeNameHandle = (event) => {
    setPerson({ name: event.target.value });
  };

  const togglePerson = () => {
    setShowPerson(!showPerson);
  }

  const btnStyle = {
    backgroundColor: '#20232a',
    color: '#61dafb',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  let personElement = null;
  
  if (showPerson) {
    personElement = <Person name={person.name} click={changePerson} change={changeNameHandle}>
      {statement}
    </Person>;
  }

  return (
    <div className="App">
      <h1>React Sample App</h1>
      <button onClick={togglePerson} style={btnStyle}>Toggle Person</button>
      {personElement}
    </div>
  );
};
// class App extends React.Component {
//   // State Declaration
//   state = {
//     person: {
//       name: 'Iron man',
//     },
//     statement: 'Love you 3000!',
//   };

//   changePerson = () => {
//     this.setState({
//       person: { name: 'Morgan Stark' },
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>React Sample App</h1>
//         {/* State Usage */}
//         <Person
//           name={this.state.person.name}
//           click={this.changePerson.bind(this)}
//         >
//           {this.state.statement}
//         </Person>

//         <button onClick={() => this.changePerson()}>Change person</button>
//       </div>
//     );
//   }
// }

export default App;
