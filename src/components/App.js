import React from 'react';
import Navbar from './Navbar.js'
import Intro from './Intro.js'
import Timeline from './Timeline';
import Footer from './Footer.js'
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
