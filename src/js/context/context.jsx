import { createContext , useContext} from "react"
import encode from "../utils/functions.js";
import { useState } from "react";
import React from "react";

const AppContext = createContext();

export const AppProvider =({ children}) =>{

const [placeholder, setPlaceholder] = useState("Contraseña");
const[number,setNumber]=useState(false);
const [symbols,setSymbols]=useState(false);
const [mayus, setMayus]=useState(false);
const [list, setList]=useState([]);

const handleNumber =()=>{
    setNumber(prev => !prev)
}
const handleMayus =()=>{
    setMayus(prev => !prev)
}
const handleSymbols =()=>{
     setSymbols(prev => !prev)
}

const handleGeneratePassword=()=>{
    const resultadoAdri= encode(
        {
            includeMajus: mayus,
            includeNumbers: number,
            includeSymbols: symbols
        }
    )
    setPlaceholder(resultadoAdri)
    }
const store={
 placeholder , 
 number ,
 symbols ,
 mayus ,
 list
}
const actions={
    handleGeneratePassword,
    handleMayus,
    handleNumber,
    handleSymbols
}

return(
<AppContext.Provider value={{store, actions}}>
{children}
</AppContext.Provider>
)
}

const useAppContext=() => useContext(AppContext);
export default useAppContext;