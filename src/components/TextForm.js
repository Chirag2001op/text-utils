import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
      let newText = text.toUpperCase()
      setText(newText)
  }

  const handleLoClick =()=>{
      let newText = text.toLowerCase()
      setText(newText)
  }

  const handleClearClick =()=>{
      let newText = ' '
      setText(newText)
  }

  const handleCopy =()=>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
  }
  const handleTextExtract=() =>{
    const regex= /[0-9/a-z/A-Z/ /]/g
    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1)
  }

  const handleExtraSpaces = () =>{
    let newText= text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=>{  //we get event object with 'On change'
          
      setText(event.target.value)  //on event target value
  }
  const [text, setText] = useState("");
//   text = "new text"; //wrong way to change the state
//   setText(newText); //correct way to change the state
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          value= {text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        
      </div>
      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2"  onClick={handleTextExtract}>Remove all symbols</button>
      <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
