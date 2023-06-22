import React from 'react';
import { Outlet, Link } from "react-router-dom";
function Navbar(){
    return (
        <>
        <nav>
            <h3 className="nav--logo_text">Nishant Patel</h3>
            <div className='nav-items'>
                <span><Link to="/" style={{ textDecoration: 'none' }}><h4 className="nav--title">About</h4></Link></span>
                <span><Link to="/experience" style={{ textDecoration: 'none' }}><h4 className="nav--title">Experience</h4></Link></span>
                <span><Link to="/skills" style={{ textDecoration: 'none' }}><h4 className="nav--title">Skills</h4></Link></span>
                <span><Link to="/academics" style={{ textDecoration: 'none' }}><h4 className="nav--title">Academics</h4></Link></span>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}



export default Navbar;