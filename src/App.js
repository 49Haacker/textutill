// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Wether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }

  const toggleMode = () => {
    // console.log(cls);
    // removeBodyClasses();
    // document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#6270d2";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark mode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "#e2e2e2";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light mode"
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 1000);
    }
  }

  return (
    // <></>
    <>
      {/* <Navbar home="Home" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Alert alert={alert} />
      <TextForm heading='Enter the text to analysis' mode={mode} showAlert={showAlert} />
    <Contact /> */}

      <BrowserRouter>
      <Navbar home='Home' title="Try TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
      <Alert alert={alert} />
      <div className="container my-5">
        <Routes>
        {/* /users --> component 1
            /user/home/ --> Component 2 
          React match exact path */}
        <Route exact path="/" element={<TextForm heading='TextUtils - Word Counter, Character Counter, Remove Extra Spaces' mode={mode} showAlert={showAlert} />} />
        {/* <TextForm heading='Enter the text to analysis' mode={mode} showAlert={showAlert} /> */}
        <Route path='about' element={<About mode={mode} />} />
        <Route path='contact' element={<Contact />} />

        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}


export default App;
