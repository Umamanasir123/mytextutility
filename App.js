import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import picc1 from './images/mypic1.png'
import pic2 from './images/mypic2.webp'
import pic3 from './images/mypic3.webp'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch, Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showtAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    
    setTimeout(()=>{
      setalert(null);
    },3000);
  }
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
}
  const toggleMode = (cls) => {
    removeBodyClass()
    console.log(cls);
    document.body.classList.add('bg-'+ cls);
    if (cls=='null'&& mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white'; 
      showtAlert("dark mode enabled");    
    }
    else if (mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showtAlert("light mode enabled",);    
    }
  }

  
  
   
  return (
    <>
      <Router>
      <Navbar title="Text Manipulator" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <h2 className='container my-2'>Text Manipulator | Word & Character counter plus other options </h2>     
      <Routes>
          <Route path="/about" element={<TextForm showtAlert={showtAlert} heading="Enter text below to analyze"/>}/>
          <Route path='/' element={<div className='cardsplacement' >
                <About im={picc1} cardheading="Provides ease"/>
                <About im={pic2} cardheading="Better to use"/>
                <About im={pic3} cardheading="Multiple options"/>
            </div>}/>
        </Routes>
     
      </Router>
      </>
   
  );
}
export default App;


