import React, { useState } from 'react'
//import logo from './logo.svg'; // we deleted the default generated JSX
import './App.css'; // inport the css file to apply styles to the JSX Code
import Alert from './Components/Alert';

// This statement added automatically when we write : <Navbar> in JSX

// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';

// Anything which is written here will show up in the React App
// start app by cmd:  npm start


// we can import imgs like below:
import logo from './logo.svg';






// creating a variable:
// let name = "Utkarsh Patel"




/* Note */
// we can not resolve the external HTML in the JSX like the below code
// let name2 = "<b>Utkarsh Patel</b>"

// it doesn't print out the BOLD TEXT it simply prints as it is

/* Note */

// let logo = "colour99/src/logo.svg" - Note we cannot use img like this





/* Importing React Router Dom */
// import { Routes, Route,  } from "react-router-dom";




function App() {
  const [Mode, setMode] = useState('light') // to check dark mode is enable or not
  const [text, setText] = useState('Enable Dark Mode') // to check dark mode is enable or not


  // toggleMode is a function but it goes to navbar but declared in this file

 const toggleMode = () => {
    if(Mode === 'light')
    {
      setMode('dark')
      setText('Enable Light Mode')
      document.body.style.backgroundColor = 'black'
      document.title = "ediText - Dark Mode";
      // calling setAlertMsg and pass 2 parameters msg and type
      setAlertMsg('Dark mode has been enabled!', "success");
      
    }
    else
    {
      setMode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      document.title = "ediText - Light Mode";

      // calling setAlertMsg and pass 2 parameters msg and type
      setAlertMsg('Light mode has been enabled!', "success");
    }
    
  }


  /* useState for the Alert Component */
  // Alert is an object we will going to create....
  const [alert, setAlert] = useState(null) // by default null


  // setAlertMsg method to set the message in the Alert
  var setAlertMsg  = (message, type) =>{
    // now the dattype of the setAlert is Object before it was null
    
    
    setAlert({
      msg: message,
      type: type
    })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }


  return (

    // we have to use curly bracket to resolve the value stored in the varible in JSX
    <>
    <Navbar title="ediText" home="Home" about="About Us" mode={Mode} toggleMode={toggleMode} setText={text}/>
    <Alert alert={alert}/>


    <div className="container">

{/* 
    <Routes>
        <Route exact path="/" element={<TextForms placeholder="Text goes here....." label="Enter Text to Convert Text to UpperCase/LowerCase" mode={Mode} toggleMode={toggleMode} setText={text} setAlertMsg={setAlertMsg}/>} />
        <Route exact path="/about" element={<About />} />
    </Routes> */}


    <TextForms placeholder="Text goes here....." label="Enter Text to perform actions on it." mode={Mode} toggleMode={toggleMode} setText={text} setAlertMsg={setAlertMsg}/>


    {/* Add the TextForms Components */}
    

    <img src={logo} className="App-logo" alt="logo" />

    {/* <About /> */}

    </div>


    </>

    // Added the navbar component
  );
}

export default App;
