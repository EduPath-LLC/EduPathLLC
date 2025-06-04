import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './screens/Home';
import Demo from './screens/Demo';
import Pricing from './screens/Pricing';
import ContactUs from './screens/ContactUs';

function RedirectHandler({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem('redirect');
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <RedirectHandler>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </RedirectHandler>
    </BrowserRouter>
  );
}

export default App;
