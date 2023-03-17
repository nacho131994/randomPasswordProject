import React from "react";
import { useState } from "react";

const Options=()=>{

 const [placeholder , setPlaceholder] = useState("Contraseña")

const handlerClick=()=>{ }

    return (
            <div className="options">
                 <h4 onClick="">Esta es tu contraseña</h4>
                <p>{placeholder}</p>
            </div>
    )
};

export default Options;