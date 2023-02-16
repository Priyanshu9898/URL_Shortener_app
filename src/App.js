import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App