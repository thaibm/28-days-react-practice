import React, { useState } from 'react';
// import React from 'react';
import './App.css';
import Person from './components/person/Person';

const App = () => {
  // State Declaration
  const [person, setPerson] = useState({ name: 'Iron man' });
  const [statement] = useState('Love you 3000!');

  const changePerson = () => {
    setPerson({ name: 'Morgan Stark' });
  }

  return (
    <div className="App">
      <h1>React Sample App</h1>
      {/* State Usage */}
      <Person name={person.name} click={changePerson}>{statement}</Person>

      <button
        onClick={() => changePerson()}
      >
        Change person
      </button>
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
