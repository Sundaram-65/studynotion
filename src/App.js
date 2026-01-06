import './App.css';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';
function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
       <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/dashboard' element={<Dashboard/>}> </Route>
            <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}> </Route>
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}> </Route>
       </Routes>
    </div>
    
  );
}

export default App;
