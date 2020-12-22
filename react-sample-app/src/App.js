import React, { useState } from 'react';
import './App.css';
import Person from './components/person/Person';
import Statement from './components/statement/Statement';

const App = () => {
  // State Declaration
  const [persons, setPersons] = useState([
    { id: 1, name: 'Iron man' },
    { id: 2, name: 'Doctor Strange' },
    { id: 3, name: 'Captain America' }
  ]);

  const [showPerson, setShowPerson] = useState(false);
  const [statement, setStatement] = useState({text: 'Love you 3000!'});

  const deletePerson = (id) => {
    const personIndex = persons.findIndex(p => p.id === id);
    const newPersons = [...persons]; // Copy object, try to avoid reference and mutate it directly
    newPersons.splice(personIndex, 1);
    setPersons(newPersons);
  };

  const changeNameHandle = (event, id) => {
    const personIndex = persons.findIndex(p => p.id === id);
    const person = { ...persons[personIndex] }; // Copy object, try to avoid reference and mutate it directly
    person.name = event.target.value;
    const newPersons = [...persons];
    newPersons[personIndex] = person;
    setPersons(newPersons);
  };

  const togglePerson = () => {
    setShowPerson(!showPerson);
    setStatement({text: 'Thaibm'});
  }

  const btnStyle = {
    backgroundColor: '#20232a',
    color: '#61dafb',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>React Sample App</h1>
      <button onClick={togglePerson} style={btnStyle}>Toggle Person</button>
      {
        showPerson && (
          persons.map(person =>

            <Person
              key={person.id}
              name={person.name}
              click={() => deletePerson(person.id)}
              change={(event) => changeNameHandle(event, person.id)}
            >
              {/* {statement} */}
            </Person>
          )
        )
      }
      <Statement statement={statement} />
    </div>
  );
};

export default App;
