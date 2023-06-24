import React from 'react';
import { Outlet, Link } from "react-router-dom";
import pdf from "./Resume.pdf";
function Navbar(){
    return (
        <div>
        <nav>
            <h3 className="nav--logo_text">Nishant Patel</h3>
            <div className='nav-items'>
                <span id='music'><Link to="/" style={{ textDecoration: 'none' }}><h4 className="nav--title">About</h4></Link></span>
                <span id='music'><Link to="/experience" style={{ textDecoration: 'none' }}><h4 className="nav--title">Experience</h4></Link></span>
                <span id='music'><Link to="/skills" style={{ textDecoration: 'none' }}><h4 className="nav--title">Skills</h4></Link></span>
                <span id='music'><Link to="/academics" style={{ textDecoration: 'none' }}><h4 className="nav--title">Academics</h4></Link></span>
                <span id='music'><a href={pdf} target="_blank" style={{ textDecoration: 'none' }}><h4 className="nav--title">Resume</h4></a></span>
            </div>
        </nav>

        <Outlet/>
        </div>
    );
}



export default Navbar;