import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Demo from './screens/Demo';
import Pricing from './screens/Pricing';
import ContactUs from './screens/ContactUs';

function App() {
  return (
    <BrowserRouter basename="/EduPathLLC/">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
}

export default App;