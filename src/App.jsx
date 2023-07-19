import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './components/navbar'
import Project from './pages/project/project'
import Education from './pages/education/education'
import Contact from './pages/contact/contact'
function App() {
  return (
    <Router basename='/portfolio'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
