import React from 'react';
import './App.css';
import logo from './jas.jpg'; // Your photo
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="My photo" />
        <h1>Welcome to My Portfolio!</h1>
        <p>
          Explore my work and connect with me.
        </p>
        <nav>
          <a className="App-link" href="#about">About</a>
          <a className="App-link" href="#projects">Projects</a>
          <a className="App-link" href="#contact">Contact</a>
          <a className="App-link" href="https://github.com/Fanu2" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
