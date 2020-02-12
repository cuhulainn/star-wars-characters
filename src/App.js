import React from 'react';
import './App.css';
import Title from './components/Title';
import Heading from './components/Heading';
import networkCaller from './utils/network';
import Person from './components/Person';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      people: [],
    };
  };

  async componentDidMount() {
    const returnedPeople = await networkCaller("https://swapi.co/api/people/");
    // console.log("returned people: ", returnedPeople);
    this.setState({ people: returnedPeople });
  }
  
  render () {
    //console.log("state: ", this.state.people)
    const { people } = this.state;
    return (
      <div className="App">
        <Title title="Star Wars" />
        <Heading headingText="People" />
        {/* {people.map(person => <Person { ...person } />)} */}
        {people.map(person => {
          return (
            <Person 
            name={person.name}
            height={person.height}
            mass={person.mass}
            gender={person.gender}
            birthYear={person.birth_year}
            />
          );
        })}
      </div>
    );
  };
};

export default App;
