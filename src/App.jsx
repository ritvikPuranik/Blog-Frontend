import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Compose from './pages/compose';
import Login from './pages/login';


function App() {
  function checkLogin(){
    if(localStorage.getItem("userAuth")){
      return <Home />
    }else{
      return <Login />
    }
  }

  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={checkLogin()} />
                <Route path='/compose' element={<Compose />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
