import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 3000);
  }
  

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Win $5M Hurry";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Click Here";
      // }, 1500);
    } else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";

    }
  }
  return (
    <>
    <Navbar title = "TextUtils" aboutText = "About text" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    {/* <Navbar /> */}
    <div className="container my-3">
     <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
     {/* <About/> */}
    
    </div>
   
    </>

  );
}

export default App;
