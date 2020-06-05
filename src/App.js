import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [userName, setUserName] = useState('Default')

  useEffect(() => {
    fetch('http://localhost:3001/api')
    .then((res) => {
      res.json().then((result) => {setUserName(result.userName)})
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test value={userName}/>
      </header>
    </div>
  );
}

const Test = (props) => {
  return (
    <p>{props.value}</p>
  )
}

export default App;
