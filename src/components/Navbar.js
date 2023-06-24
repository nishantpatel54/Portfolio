import React from 'react';
import { Outlet, Link } from "react-router-dom";
import pdf from "./Resume.pdf";
import Cubes from './Cubes';
function Navbar(props){
    let cubes = []
    for (let i=0;i<props.numCubes;i++){
        cubes.push(<Cubes/>)
    }
    return (
        <div>
        <nav>
            <h3 className="nav--logo_text">Nishant Patel</h3>
            <div className='nav-items'>
                <span><Link to="/" style={{ textDecoration: 'none' }}><h4 className="nav--title">About</h4></Link></span>
                <span><Link to="/experience" style={{ textDecoration: 'none' }}><h4 className="nav--title">Experience</h4></Link></span>
                <span><Link to="/skills" style={{ textDecoration: 'none' }}><h4 className="nav--title">Skills</h4></Link></span>
                <span><Link to="/academics" style={{ textDecoration: 'none' }}><h4 className="nav--title">Academics</h4></Link></span>
                <span><h4 className="nav--title"><a href={pdf} target="_blank" style={{ textDecoration: 'none' }}>Resume</a></h4></span>
            </div>
            {cubes}
        </nav>

        <Outlet/>
        </div>
    );
}



export default Navbar;