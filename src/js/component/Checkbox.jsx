import React from "react";
import { useState } from "react";
import useAppContext from "../context/context.jsx";
const Checkbox = () => {

  const{store, actions}=useAppContext();
  const{number, symbols, mayus}=store;
  const{handleMayus, handleSymbols, handleNumber}=actions;
  

  return (
    <div>
      <h3>Selecciona una Opcion</h3>
      <div className="form-check">
        <input onChange={handleNumber} className="form-check-input" type="checkbox" value={number} id="defaultCheck1" />
        <label className="form-check-label" for="defaultCheck1">
          Incluir números
        </label>
      </div>
      <div className="form-check">
        <input onChange={handleSymbols} className="form-check-input" type="checkbox" value={symbols} id="defaultCheck1" />
        <label className="form-check-label" for="defaultCheck1">
          Incluir símbolos
        </label>
      </div>
      <div className="form-check">
        <input onChange={handleMayus} className="form-check-input" type="checkbox" value={mayus} id="defaultCheck1" />
        <label className="form-check-label" for="defaultCheck1">
          Incluir mayúscula
        </label>
      </div>
    </div>
  )
}
export default Checkbox;