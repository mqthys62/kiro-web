import React, { useEffect } from 'react'
import { BrowserRouter as RouterContainer, Routes, Route } from 'react-router-dom';

import Home from './pages/Homepage';
import About from './pages/About';
import Buy from './pages/Buy';

import Nav from './components/Navbar';

import AOS from 'aos';

export default function Router() {
  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <>
      <RouterContainer>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </RouterContainer>
    </>
  )
}
