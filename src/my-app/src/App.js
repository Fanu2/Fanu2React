import React from 'react';
import './App.css';
import logo from './jas.jpg';  // Assuming you've added your photo in place of the default logo
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
