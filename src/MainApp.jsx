import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import the components you just created
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import ErrorPage from './ErrorPage';
import Services from './Services';



const MainApp = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home component at root path */}
        <Route exact path="/about" element={<About name="About"/>} />     {/* About component at /about */}
        <Route path="/services/:fname/:lname" element={<Services />} />
          {/* About component at /about */}

        <Route path="/contact" element={<Contact />} /> {/* Contact component at /contact */}
        <Route path="*" element={<ErrorPage />} />  
            {/* Catch-all route for undefined paths */}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default MainApp;