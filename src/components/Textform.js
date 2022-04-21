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
    const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra space removed', 'success');
    }
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
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Result</h2>
        <p>{text.split(' ').length} Words and {text.length} Characters</p>
        <p>{0.008* text.split(' ').length} Minutes to read</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Enter your text above to preview here"}</p>
    </div>
    </>
  ) 
}
