import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import React from 'react'
import Post1 from './Pages/Post1'
import Post2 from './Pages/Post2'
import Post3 from './Pages/Post3'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post1' element={<Post1 />} />
          <Route path='/post2' element={<Post2 />} />
          <Route path='/post3' element={<Post3 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

