import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import PokemonApplication from './components/PokemonApplication';
import { Routes, Route, Link } from 'react-router-dom';



function App() {

  return (
    <>

    <h1>Pokemon</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/start">Pokemon</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="start" element={<PokemonApplication/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
