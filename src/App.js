import React from 'react';
import './Styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './Components/NavigationBr/NavigationBar'
import Landing from './Components/LandingPg/Landing'
import About from './Components/AboutPg/About'
import Gallery from './Components/GalleryPg/Gallery'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
