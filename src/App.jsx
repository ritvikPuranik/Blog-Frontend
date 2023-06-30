import './App.css';
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import MyPosts from './pages/myPosts';
import DisplayFullArticle from './pages/displayFullArticle';
import Compose from './pages/compose';
import Login from './pages/login';
import NotFound from './components/404';



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
                <Route path='/myPosts' element={<MyPosts />} />
                <Route path='/:articleId' element={<DisplayFullArticle/>} />
                <Route path='/compose' element={<Compose />} />
                <Route path='/notFound' element={<NotFound />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
