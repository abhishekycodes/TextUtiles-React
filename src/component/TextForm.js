import React, {useState} from "react";

export default function TextForm(props) {
   
    const handleUpClick = ()=>{
        // console.log("cliked to uppercase: " +  text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase!","success")
    }

    const handleLoClick = ()=>{
      // console.log("cliked to lowercase: " +  text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase!","success")
  }

  const handleClearClick = ()=>{
    // console.log("cliked to lowercase: " +  text)
    let newText = '';
    setText(newText)
    props.showAlert("Text Clear!","success")
}
   
    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
 
   
    const [text, setText] = useState('');
  return (
     <>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2> Your Text Summary</h2>
    <p> {text.slice(" ").length} Words and {text.length} Characters</p>
    <p>{0.008 * text.slice(" ").length} Minites read</p>
    <h3>Priview</h3>
    <p>{text.length>0?text:"Enter someting in the textbox above to priview here"}</p>
    </div>
    </>
  );
}
