import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link> <br />
            <Link to={"/login"}>Login</Link> <br />
            <Link to={"/aboutus"}>About us</Link> <br />

        </div>
    );
};

export default NavBar;