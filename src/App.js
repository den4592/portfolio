import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



function App() {
  return (
    
      <div className="container">
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
 
  );
}

export default App;
