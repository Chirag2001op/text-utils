import React from 'react'
import './app.css'
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'



function App() {
  return (
    <div className="App">
    
      <Navbar title = "TextUtils"/>
      <div className="container">

      <TextForm heading = "Enter text to analyze"/>

      {/* <About/> */}
      </div>

    </div>
  );
}

export default App;
