import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Compose from './pages/compose';


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/compose' element={<Compose />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
