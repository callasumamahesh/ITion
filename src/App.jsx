import React from 'react'
import './App.css'
import Allmovies from './Components/Allmovies'
import {Route,Routes} from 'react-router-dom'
import SingleMovie from './Components/SingleMovie'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Allmovies/>}></Route>
        <Route path='/:id' element={<SingleMovie />}></Route>
      </Routes>
    </div>
  )
}

export default App