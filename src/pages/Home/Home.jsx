import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Skills from '../../components/Skills/Skills';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
       <Projects />
       <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
