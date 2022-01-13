import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
      let newText = text.toUpperCase()
      setText(newText)
      props.showAlert('Text has been converted to upper text', 'success')
  }

  const handleLoClick =()=>{
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert('Text has been converted to lower text', 'success')
  }

  const handleClearClick =()=>{
      let newText = ' '
      setText(newText)
      props.showAlert('Text has been cleared', 'success')
  }

  const handleCopy =()=>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert('Text has been copied', 'success')
  }
  const handleTextExtract=() =>{
    const regex= /[0-9/a-z/A-Z/ /]/g
    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1)
    props.showAlert('All the symbols has been removed from the text', 'success')
  }

  const handleExtraSpaces = () =>{
    let newText= text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert('All the extra spaces has been removed from the text', 'success')
  }

  const handleOnChange = (event)=>{  //we get event object with 'On change'
          
      setText(event.target.value)  //on event target value
  }
  const [text, setText] = useState("");
//   text = "new text"; //wrong way to change the state
//   setText(newText); //correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          value= {text}
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} //first curlybrace is that  want to write javascript and second is I want to write an object in it
          onChange={handleOnChange}
        ></textarea>
        
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2"  onClick={handleTextExtract}>Remove all symbols</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>element.length!==0).length} words, {text.length} characters</p>
      <p>{0.08 * text.split(" ").filter((element)=>element.length!==0).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}
