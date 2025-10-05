import { useState } from 'react'
import './App.css'
import Projductlist from './components/Projductlist'
import Cart from './components/Cart'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Router>
        <Routes>

          <Route path="/" element={<Projductlist/>} />
          <Route path="/cart" element={<Cart/>} />

          
        
        </Routes>
     </Router>
    </>
  )
}

export default App
