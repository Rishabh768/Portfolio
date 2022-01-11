import React from 'react';
import Cards from './components/Cards'
import About from './components/About'
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <div className='min-h-screen py-10 px-3 sm:px-5 bg-gray-100'>
      <Cards />
      <About />
      <Skills />
      <Contact/>
      <Footer/>
   </div>
  );
}

export default App;
