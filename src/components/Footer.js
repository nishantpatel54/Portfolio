import GitHubLogo from '../images/github-mark-white.png'
import React from 'react'
import LinkedIn from '../images/linkedin.png'
function Footer(){
    return(
        <footer className='footer-page'>
            <div className='footer-logos'>
                <p><a href="https://github.com/np5499" target='_blank'><img src={GitHubLogo} className='footer-img'/></a></p>
            </div>
            <div className='footer-logos'>
                <p><a href="https://www.linkedin.com/in/nishantpatel54/" target='_blank'><img src={LinkedIn} className='footer-img'/></a></p>
            </div>
        </footer>
    );
}


export default Footer