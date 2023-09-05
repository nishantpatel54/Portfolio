import React from 'react';
import Footer from './Footer';
import panel from '../images/panel-profile.png'
function Intro(){
    return (
        <div>
            <div className='container'>
                <div className='about'>
                    <h3 style={{'font-size':'3em'}}>Hi there! I'm Nishant</h3>
                    <section className='about-content'> 
                    <p>I'm a computer science student at Ryerson University and an aspiring Software Engineer.
                        I previously interned at Ceridian as a Software Developer. I'm looking for my next internship
                        opportunity and always looking forward to connect with new people and acquire new experiences
                        both as an Software Engineer and as a person.I'm currently a full-stack developer but I'm branching out to Machine Learning and working
                        on Natural Language processing and Financial analysis to create fun projects on my personal time.
                    </p>
                    </section>
                    <br/>
                    <section className='about-content'>
                    <p>
                        Thank you for visiting my site! I hope you get to know a bit more about me. 
                        Feel free to check out my projects on my GitHub and connect through my LinkedIn by clicking on the Icons below.
                    </p>
                    </section>
                </div>
                {/* <div className='about-image'>
                    <img className='about-image' src={panel}/>
                </div> */}
            </div>
            <Footer/>
        </div>
    );
}

export default Intro;
