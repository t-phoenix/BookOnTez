//import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
