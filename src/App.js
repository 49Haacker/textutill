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



  const toggleMode = () => {
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

    <>

      <BrowserRouter>
        <Navbar home='Home' title="Try TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <About /> */}
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/home/" element={<TextForm heading='TextUtils - Word Counter, Character Counter, Remove Extra Spaces' mode={mode} showAlert={showAlert} />} />
            <Route path='about' element={<About mode={mode} />} />
            <Route path='contact' element={<Contact />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;
