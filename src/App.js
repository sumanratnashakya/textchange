import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"; 


function App() {  
  //Dark Mode
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null) ; 

  //Alert Section
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    },1000); 
  }

  const removeBodyClass=()=>{
    document.body.classList.remove('light')
    document.body.classList.remove('success')
    document.body.classList.remove('warning')
    document.body.classList.remove('dark')
    document.body.classList.remove('danger')
    document.body.classList.remove('primary')
  }

  const toggleMode =(cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark') 
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode has been Enabled","success");
      document.title='TextChanger | DarkMode Home';
    }else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success");
    }

  

  }
  return (
   <>
   <Router>
{/* import from Navbar.js     */}
<Navbar title='TextChanger' about='About' mode={mode} toggleMode={toggleMode}/> 
{/* import from Navbar.js     */} 

{/* import from Alert.js     */} 
<Alert alert={alert}/>
{/* import from Alert.js     */} 


{/* import from Textform.js     */} 
<div className="container">
        <Switch>
              <Route exact path="/about">
              <About mode={mode}/>
              </Route> 
              <Route exact path="/"> 
              < Textform showAlert={showAlert} title='Enter your text below' mode={mode}/> 
              </Route>
        </Switch>
</div>   
</Router> 
</>
  );
}

export default App;
