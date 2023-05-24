import { useState } from "react";
import React from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Lower Case was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard");
  };



  const handleOnChange = (event) => {
    console.log("On change ");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox "
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-dark mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleClear}>
          Clear
        </button>
     
        <button className="btn btn-dark mx-1"
          onClick={handleCopy}>
          Copy
        </button>
        <ToastContainer />
        
      </div>
      <div>
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
