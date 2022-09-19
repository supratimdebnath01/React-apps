import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
      let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
      let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }

 

 const [text, setText] = useState('');
 
  return (
    <>
    <div>
        <h1 className='my-4'>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear all</button>
          <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>Remove Extra Spaces</button>   
 
    </div>
    <div className="container my-3">
          <h2>Your text summery</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split("").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
    </div>
    </>
  )
};