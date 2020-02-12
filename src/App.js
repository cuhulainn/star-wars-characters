import React from 'react';
import './App.css';
import Title from './components/Title';
import Heading from './components/Heading';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      people: [],
    };
  }
  
  render () {
    return (
      <div className="App">
        <Title title="Star Wars" />
        <Heading headingText="People" />
      </div>
    );
  };
};

export default App;
