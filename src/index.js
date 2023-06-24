import React from 'react';
import './styles/index.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Intro from './components/Intro.js'
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import reportWebVitals from './reportWebVitals';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Navbar numCubes={5}/>}>
        <Route index element={<Intro />} />
          <Route path="experience" element={<Timeline />} />
          <Route path="skills" element={<Skills />} />
          <Route path="academics" element={<Timeline />} />
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