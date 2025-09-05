
import { useState } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav'
import Nav from './Components/Nav'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChaarts/LineChart'

function App() {

  return (
    <>
   <div>
        <Nav/>
        <DaisyNav/>
        <PriceOptions/>
        <LineChart/>
   </div>
    </>
  )
}

export default App
