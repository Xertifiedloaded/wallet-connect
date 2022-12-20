import React from 'react';
import './App.css';
import Defi from './pages/defi'
import Header from './pages/homepage/header';
import Home from './pages/homepage/home';
import Footer from './pages/homepage/footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/defi' element={<Defi></Defi>}/>
      </Routes>
    <Footer/>
    </>
  );
}
export default App;
