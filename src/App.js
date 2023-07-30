import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Post from "./Pages/Post";
import Login from './Pages/Login';
import { Routes,Route, BrowserRouter, Navigate } from 'react-router-dom';

const App = () => {
  const user = false
  return (
    <BrowserRouter>
    <div>
      <NavBar user={user}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path='/post/:id' element={user ? <Post/> : <Login/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
