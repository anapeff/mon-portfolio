import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function AppRouter() {
    return (
      <Router>
        <Header/>
        <Routes>
      
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    );
}

export default AppRouter;