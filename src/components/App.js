import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [classn,setClass]=useState("redColor");

//code here 
  const toggleClass =()=>{
      if(classn === "redColor"){
        setClass(blueColor);
      }
      else setClass("redColor");
  }
  return (
    <div id="main">
      <p className={classn} >Newton School</p>
      <button id='button' onClick={toggleClass}>Change Style</button>
    </div>
  )
}


export default App;
