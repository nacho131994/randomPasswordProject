import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{

    return(<nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">Navbar</a>
      <div className="d-flex">
        <Link to="/" className="nav-link m-3">Home</Link>
        <Link to="/my_passwords" className="nav-link m-3">Contraseñas Guardadas</Link>
    </div>
    </div>
    </nav>
    )
    }
    
    export default Navbar;
    
