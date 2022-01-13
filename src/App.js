import React, {useState} from 'react'
import './app.css'
import About from './components/About';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import TextForm from './components/TextForm'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light') //weather dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert =(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
  }

  const toggleColorMode=(cls)=>{
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
  }
  const toggleMode=()=>{
      if(mode === 'dark'){
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert('Light mode has been enabled', 'success')
        document.title = 'TextUtils - light mode'
      }
      else{
        setMode('dark')
        document.body.style.backgroundColor = 'black'
        showAlert('Dark mode has been enabled', 'success')
        document.title = 'TextUtils - dark mode'
      }
  }
  return (
    <div className="App">
     <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} toggleColorMode={toggleColorMode}/>
      <Alert alert={alert} />
      <div className="container">
      
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
          <TextForm heading = "Enter text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
      </Switch>

      </div>
      </Router>
      

    </div>
  );
}

export default App;
