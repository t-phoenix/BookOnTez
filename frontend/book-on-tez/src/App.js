//import logo from './logo.svg';
import React from 'react';
import './App.css';

import Routes from './Routes';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes/>
    </div>
  );
}

export default App;
