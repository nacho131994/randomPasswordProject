import React from "react";

const Hero =(props)=>{
    return (
        <div  id="divPrincipal" className="wrapper bg-dark text-white" >
            <div className="title ">
                <h1>{props.titulo}</h1>
            </div>
            <div className="description">
                <p>esto es una descripcion de la app</p>
            </div>
        </div>


    )
}
export default Hero;