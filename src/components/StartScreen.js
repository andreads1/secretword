import React from "react";
import "./StartScreen.css";

const StartScreen = ({startGame})=>{
    return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique para começar a jogar</p>
        <button onClick={startGame}>Iniciar jogo</button>
    </div>
    );
};

export default StartScreen;