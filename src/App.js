import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx"
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <div>
      <Navbar/>
      <div class="container-fluid">
        <Home/>
        <Projects/>
        <Experience/>
      </div>
    </div>
  );
}

export default App;
