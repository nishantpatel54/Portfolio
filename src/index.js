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

  const experiences = [
    { title: 'Sept 2018 - Dec 2018', 
    cardTitle: 'Fall 2018 University of Toronto', 
    cardDetailedText: ["- CSCA08H3 Introduction to Computer Science I", "- CSCA67H3 Discrete Mathematics", "- MATA31H3 Calculus I for Mathematical Sciences", '- BIOA01H3 Life on Earth: Unifying Principles', '- CHMA10H3 Introductory Chemistry I: Structure and Bonding']},
    { title: 'Jan 2019 - Apr 2019', 
    cardTitle: 'Winter 2019 University of Toronto',
    cardDetailedText : ['- CSCA48H3 Introduction to Computer Science II', '- MATA22H3 Linear Algebra I for Mathematical Sciences', '- MATA37H3 Calculus II for Mathematical Sciences', '-BIOA02H3 Life on Earth: Form, Function and Interactions', '- CHMA11H3 Introductory Chemistry II: Reactions and Mechanisms']},
    { title: 'May 2019 - July 2019 ', 
    cardTitle: 'Summer 2019 University of Toronto',
    cardDetailedText: ['- STAB57H3 Introduction to Statistics', '- CSCB36H3 Introduction to the Theory of Computation', '- MATB24H3 Linear Algebra II']}
  ];
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Intro />} />
          <Route path="experience" element={<Timeline items={experiences}/>} />
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