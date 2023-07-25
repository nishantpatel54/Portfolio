import React from 'react';
import './styles/index.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Intro from './components/Intro.js'
import Timeline from './components/Timeline';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import reportWebVitals from './reportWebVitals';
import data from './components/data.js';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Intro />} />
          <Route path="experience" element={<Experiences items={data.experiences}/>} />
          <Route path="skills" element={<Skills />} />
          <Route path="academics" element={<Timeline items={data.courses}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

{/* <Navbar/>
      <Intro/>
      <Footer/> */}

reportWebVitals();