import React from 'react';
import './App.css';
import Header from './pages/homepage/header';
import Home from './pages/homepage/home';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}/>
      </Routes>
    </>
  );
}

export default App;
