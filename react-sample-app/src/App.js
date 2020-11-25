import React, { useState } from 'react';
import './App.css';
import Person from './components/person/Person';
const App = () => {
  // State Declaration
  const [person, setPerson] = useState({ name: 'Iron man' });
  const [statement, setStatement] = useState('Love you 3000!');

  return (
    <div className="App">
      <h1>React Sample App</h1>
      {/* State Usage */}
      <Person name={person.name}>{statement}</Person>

      <button
        onClick={() => {
          setPerson({ name: 'Morgan Stark' });
        }}
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

//   render() {
//     return (
//       <div className="App">
//         <h1>React Sample App</h1>
//         {/* State Usage */}
//         <Person name={this.state.person.name}>{this.state.statement}</Person>

//         <button
//           onClick={() => {
//             this.setState({
//               person: { name: 'Morgan Stark' },
//             });
//           }}
//         >
//           Change person
//         </button>
//       </div>
//     );
//   }
// }

export default App;
