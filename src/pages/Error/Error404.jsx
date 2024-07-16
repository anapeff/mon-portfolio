import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Error404 = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Page non trouvée</h2>
        <p>La page que vous cherchez n'existe pas.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Error404;
