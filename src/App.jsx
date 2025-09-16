import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Home/Home'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);  

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);   
      if(currentUser){
        console.log('Logged In!');
        navigate('/');
      }else{
        console.log('Logged Out!');
        navigate('/login');
      }
    });

    return () => unsubscribe();
  },[navigate]);

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={user ? <Player/> : <Login/>}/>
      </Routes>
    </div>  
  )
}

export default App
