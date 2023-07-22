import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './Home'
import Import from './Import'
import Business from './Business'
import Logistics from './Logistics'
import Estate from './Estate'
import Investment from './Investment'
import Sports from './Sports'
import './app.css'


function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/import-export' element={<Import />} />
      <Route path='/business' element={<Business />} />
      <Route path='/logistics' element={<Logistics />} />
      <Route path='/estate' element={<Estate />} />
      <Route path='/investment' element={<Investment />} />
      <Route path='/sports' element={<Sports />} />
    </Routes>
  )
}

export default App
