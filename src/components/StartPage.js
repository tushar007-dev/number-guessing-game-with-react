import React, { useState } from "react";
import {useNavigate}  from "react-router-dom";
import InputValue from "./InputValue";

const StartPage = () => {
  let [text, setText] = useState("");
  let [error, setError] = useState(false);

  let navigate = useNavigate()

  let handleStart = () => {
    if (text) {
      console.log("ami error na");
      setError(false);
      navigate("/playerone")
    }else{
      setError(true);
      console.log("ami error");
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="section">
      <h1>Wanna Play Game?</h1>
      <div>
      <input
        onChange={handleInput}
        className="input-box"
        placeholder="Enter your name"
        text={text}
      />{" "}
      <InputValue text={text}/>
      
      </div>
      <br />

      <button className="start-game-btn" onClick={handleStart}>
            Start Game
          </button>

      {error && <h2 style={{ color: "red" }}>Write Something</h2>}
    </div>
  );
};

export default StartPage;
