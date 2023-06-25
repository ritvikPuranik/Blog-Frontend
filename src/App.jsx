import './App.css';
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Compose from './pages/compose';
import Login from './pages/login';



function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  
  useEffect(()=>{
    if(localStorage.getItem("userAuth")) setUserLoggedIn(true);
  }, [])

  function checkLogin(){
    console.log("Local storage check>>", localStorage.getItem("userAuth"));
    if(localStorage.getItem("userAuth")){
      console.log("userLoggedIn>>", userLoggedIn);

      return <Home />
    }else{
      return <Login />
    }
  }

  return (
    <div className="App">
        <Router>
        {userLoggedIn && <Navbar />}
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
