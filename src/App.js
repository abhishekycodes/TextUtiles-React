import "./App.css";
import Alert from "./component/Alert";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const togglemode = ()=>{
 if(mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor ='#062949';
  showAlert("Dark mode had been enable","success")
 }else{
  setMode('light')
  document.body.style.backgroundColor ='white';
  showAlert("Light mode had been enable","success")
 }

} 


  return (
    <>
    {/* <Router> */}
       <Navbar title ="TextUtils" aboutText="About" mode={mode} togglemode={togglemode}/> 
       <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={ <About />}> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}> */}
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
      {/* </Routes> */}
    </div>
  {/* </Router> */}
       
    </>
  );
}

export default App;
