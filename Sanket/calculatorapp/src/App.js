import './App.css';
import { useState } from 'react';
import Clickable_item from './Clickable_item/Clickable_item';
import { Input } from './Clickable_item/Input';
import * as math from 'mathjs';

function App() {

  const btncolor = "#f2a33c" 

  const [text, setText] = useState("");
  const [result, setResult] = useState("")

  const addText = (val) =>{
    setText((text) => [...text, val + ""])
  }

  const resetText = () =>{
    setResult("")
    setText("")
  }
  const calText = () =>{
    const input_text = text.join("")

    setResult(math.evaluate(input_text))
  }

  return (
    <div className="App">
      <div className='cal-wrapper'>
        <Input text={text} result={result}/>
        <div className='row'>
          <Clickable_item symbol="7" handleClick={addText}/>
          <Clickable_item symbol="8" handleClick={addText}/>
          <Clickable_item symbol="9" handleClick={addText}/>
          <Clickable_item symbol="/" color={btncolor} handleClick={addText}/>
        </div>
        <div className='row'>
          <Clickable_item symbol="4" handleClick={addText}/>
          <Clickable_item symbol="5" handleClick={addText}/>
          <Clickable_item symbol="6" handleClick={addText}/>
          <Clickable_item symbol="-" color={btncolor} handleClick={addText} />
        </div>
        <div className='row'>
          <Clickable_item symbol="1" handleClick={addText}/>
          <Clickable_item symbol="2" handleClick={addText}/>
          <Clickable_item symbol="3" handleClick={addText}/>
          <Clickable_item symbol="*" color={btncolor} handleClick={addText}/>
        </div>
        <div className='row'>
          <Clickable_item symbol="0" handleClick={addText}/>
          <Clickable_item symbol="." handleClick={addText}/>
          <Clickable_item symbol="=" handleClick={calText}/>
          <Clickable_item symbol="+" color={btncolor} handleClick={addText} />
        </div>
        <div className='row'>
          <Clickable_item symbol="Clear" color={btncolor} handleClick={resetText}/>
        </div>
      </div>
    </div>
  );
}

export default App;
