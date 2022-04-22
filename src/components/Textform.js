import React, {useState} from 'react' 

export default function Textform(props) {
    //EventHandler
    const handleUpClick=()=>{
        //console.log('uppercase was Clicked');
        let newText = text.toUpperCase();
        setText(newText);//this is the way to update or change the value of setText
        props.showAlert('Changed to uppercase', 'success');
    }
    const handleLoClick=()=>{
        //console.log('uppercase was Clicked');
        let newText = text.toLowerCase();
        setText(newText);//this is the way to update or change the value of setText
        props.showAlert('Changed to lowercase', 'success');
    }
    const handleOnChange=(event)=>{
        // cdconsole.log('on Change');
        setText(event.target.value); 
    }

    //copy text
    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('copied to clipboard','success');

    }

    //Extra space removed
    const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra space removed', 'success');
    }

    //text box cleared
    const handleClear=()=>{
       let newText = "";
       setText(newText);
       props.showAlert('text box cleared', 'success');
    }

    //useState
    const [text, setText] = useState('');
     
  return (
      <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h2>{props.title}</h2></label>
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8 "></textarea> {/*useState text in placeholder*/}
        </div>
        <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Result</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008* text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Enter your text above to preview here"}</p>
    </div>
    </>
  ) 
}
