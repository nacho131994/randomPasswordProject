import React from "react";
import { useState } from "react";
import useAppContext from "../context/context.jsx";



const Options = () => {
const {store, actions}=useAppContext();
const {placeholder}=store;
const {handleGeneratePassword}=actions;
    


    return (
        <div className="options">
            <button onClick={handleGeneratePassword}>Generar contraseña</button>
            <h4>Esta es tu contraseña</h4>
            <p>{placeholder}</p>
        </div>
    )
};

export default Options;