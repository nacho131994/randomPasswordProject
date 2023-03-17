import React from "react";
import { useState } from "react";
const Checkbox=()=>{
const [placeholder , setPlaceholder] = useState("")

const handlerClick=()=>{
return 


}

return(
<div>
    <h3>Selecciona una Opcion</h3>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label className="form-check-label" for="defaultCheck1">
    Incluir números
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label className="form-check-label" for="defaultCheck1">
  Incluir símbolos
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label className="form-check-label" for="defaultCheck1">
    Incluir mayúscula
  </label>
  </div>
  <h4 onClick="">Esta es tu contraseña</h4>
  <p>{placeholder}</p>

</div>

)


}
export default Checkbox;