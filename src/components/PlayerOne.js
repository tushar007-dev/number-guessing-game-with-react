import React, { useState } from 'react'
import {useNavigate}  from "react-router-dom";
import InputValue from './InputValue';

const PlayerOne = () => {

    let [text, setText] = useState("");
    let [error, setError] = useState(false);
  
    let navigate = useNavigate()
  
    let handlePlay = () => {
      if (text) {
        if(text < 1 || text >10){
            console.log("ami boro hoichi");
        }else{
            if(text - 15){
                console.log("ami number");
                navigate("/playertwo")
            }else{
                console.log("ami number na");
            }
        }
        console.log("ami error na");
        setError(true);
        
      }else{
        setError(true);
        console.log("ami error");
      }
    };
  
    const handleNumber = (e) => {
    setText(e.target.value);
    };


  return (
    <div className="section">
    <h1>player-1</h1>
      <div>
      <input onChange={handleNumber} className="input-box" placeholder="Give a number"/>
      <InputValue text={text}/>
        </div> <br/>
      
      <button onClick={handlePlay} className="start-game-btn">Let's Play</button>

      {error && <h2 style={{ color: "red" }} className='error'>Write Something</h2>}
      
    </div>
  )
}

export default PlayerOne