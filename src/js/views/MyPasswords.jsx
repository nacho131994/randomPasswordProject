import React from "react";
import Hero from "../component/Hero.jsx";
import List from "../component/List.jsx";
import ListItem from "../component/listItem.jsx";
import useAppContext from "../context/context.jsx";


const MyPasswords =(props)=>{
    const{store, actions}=useAppContext();
    const{list}=store;
    
    
    return ( 
        <div className="container">
        <h1>Mis contraseñas guardadas</h1>
            <ListItem />
        </div>
         
    )
};

export default MyPasswords;