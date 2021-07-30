import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Home />
      <About/>
      <Contact/>
      <Footer />
    </>
  );
}
