import React from 'react'
import { BrowserRouter as RouterContainer, Routes, Route } from 'react-router-dom';

import Home from './pages/Homepage';
import About from './pages/About';
import Buy from './pages/Buy';

export default function Router() {
  return (
    <RouterContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/buy" element={<Buy />} />
            </Routes>
    </RouterContainer>
  )
}
