import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavigationBr/NavBar'
import Landing from './Components/LandingPg/Landing'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
    </div>
  );
}

export default App;
