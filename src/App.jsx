import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import eSummit from './pages/eSummit'
const Esummit = esummit;

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/esummit" element={<ESummit/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
