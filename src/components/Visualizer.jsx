import React, { useState } from 'react'
import '../component-css/Visualizer.css'

function Visualizer({ array, setArray, isSorting, compare }) {
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const resetArray = () => {
    const newInput = input.split(',').map(Number);
    if(newInput.length == 12){
      setArray(newInput);
    }
    else{
      alert("Please enter 12 numbers separated by commas");
      }
  }

  

  return (
    <div className="container">
    <div className="array-container">
      
      {array.map((value, id) => (

        <div className='array-bar'key={id} style={{height: `${value * 2}px`, backgroundColor: compare.includes(id) ? 'yellow' : '#3498db'}} >
          <div className="array-value">{value}</div>
        </div>
      ))}
      </div>
      <div className="Input-Section">
        <input type="text" value={input} onChange={handleInputChange} placeholder='Enter 12 numbers separated by commas' disabled={isSorting}/>
        <button className='vButton' onClick={resetArray} disabled={isSorting}>Generate</button>
      </div>
      
    </div>
  );
};


export default Visualizer