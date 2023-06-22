import React from 'react';
import './styles/index.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Intro from './components/Intro.js'
import Timeline from './components/Timeline';
import reportWebVitals from './reportWebVitals';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Intro />} />
          <Route path="experience" element={<Timeline />} />
          <Route path="skills" element={<Timeline />} />
          <Route path="academics" element={<Timeline />} />
          <Route path="resume" element={<Resume />} />
          
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