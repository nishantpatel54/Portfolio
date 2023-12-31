import React from 'react';
import './styles/index.css';
import Navbar from './components/Navbar.js'
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Intro from './components/Intro.js'
import Timeline from './components/Timeline';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import reportWebVitals from './reportWebVitals';
import data from './components/data.js';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Intro />} />
          <Route path="experience" element={<Experiences items={data.experiences}/>} />
          <Route path="skills" element={<Skills />} />
          <Route path="academics" element={<Timeline items={(window.screen.width >= 1244 ? data.courses : data.courses_mobile)}/>} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />}  />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

{/* <Navbar/>
      <Intro/>
      <Footer/> */}

reportWebVitals();