import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () =>{
      let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }

    const handleClearClick = () => {
      let newText = '';
        setText(newText);
        props.showAlert("Your text has been cleared", "danger");

    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied text", "success");

    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Removed extra space", "success");
    }

 

 const [text, setText] = useState('');
 
  return (
    <>
    <div className='container' style = {{color: props.mode ==='dark'? 'white':'#042743'}}>
        <h1 className='my-4'>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode ==='dark'? '#2b6865':'white', color:props.mode ==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear all</button>
          <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>Remove Extra Spaces</button>   
 
    </div>
    <div className="container my-3" style = {{color: props.mode ==='dark'? 'white':'#042743'}}>
          <h2>Your text summery</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split("").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ?text:"Enter the text to preview"}</p>
    </div>
    </>
  )
};
