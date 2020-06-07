import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [userName, setUserName] = useState('Default')

  useEffect(() => {
    fetch('http://ec2-13-125-198-77.ap-northeast-2.compute.amazonaws.com:3001/api')
    .then((res) => {
      res.json().then((result) => {setUserName(result.userName)})
    })
    .catch((err) => {setUserName('ERROR!')})
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
