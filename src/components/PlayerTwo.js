import React, { useState } from "react";
import {useNavigate}  from "react-router-dom";
import PlayerOne from "./PlayerOne";
import InputValue from "./InputValue";

const PlayerTwo = () => {
    let [text, setText] = useState("");
  let [error, setError] = useState(false);

  let navigate = useNavigate()

  let handleGess = () => {
    if (text) {

        if(text < 1 || text >10){
            console.log("ami boro hoichi");
        }else{
            if(text - 15){
                console.log("ami number");
                navigate("/gameover")
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

  const handlePlayerTwo = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="section">
    <h1>Player-2</h1>
      <div>
      <input onChange={handlePlayerTwo} className="input-box" placeholder="Guess a number"/>
      <InputValue/>
        </div> <br/>
      <button onClick={handleGess} className="start-game-btn">Guess</button>

      {error && <h2 style={{ color: "red" }} className='error'>Write Something</h2>}
      
    </div>
  )
}

export default PlayerTwo