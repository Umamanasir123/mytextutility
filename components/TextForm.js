import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("upper case clicked");
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showtAlert("Converted to upper case","Success ");
    }

    const handleLowClick = ()=>{
        console.log("lower case clicked");
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showtAlert("Converted to lower text","Success ");
    }

    const handleClearClick = () => {
        setText('')
    }

    const handleCopyClick = () => {
        var text= document.getElementById("mytextarea");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showtAlert("Copied to clipboard","Success ")
    }
    const handleRemoveClick = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showtAlert("Removed extra space from your text","Success ")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
   return (   
    <>
        <div className='container'>
            <h3 className='my-3'>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mytextarea" rows="8" ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert Upper case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert Lower case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button> 
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>       
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveClick}>Remove extra space</button>       


        </div>
        <div className='container my-3'>
            <h2>Your text summary is:</h2>
            <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} minutes to read</p>
            <h2>Preview Text</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>

    </>

  )
}
