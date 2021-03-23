// import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';

function App() {
  // create a slice of state to keep track of all your members
  const [members, setMembers] = useState([]);

  // create a function that updates the members with a new member when Form submits a new member and then pass it down as props

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Team Builder</h1>
      </header>
      <div className='form-container'>
        <Form />
      </div>
      <div>
        <Member />
      </div>
    </div>
  );
}

export default App;
