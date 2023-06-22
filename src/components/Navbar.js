import React from 'react';

function Navbar(){
    return (
        <nav>
            <h3 className="nav--logo_text">Nishant Patel</h3>
            <div className='nav-items'>
                <span><h4 className="nav--title">About</h4></span>
                <span><h4 className="nav--title">Experience</h4></span>
                <span><h4 className="nav--title">Skills</h4></span>
                <span><h4 className="nav--title">Academics</h4></span>
            </div>
        </nav>
    );
}



export default Navbar;