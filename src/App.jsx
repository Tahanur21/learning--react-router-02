
import { useState } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav'
import Nav from './Components/Nav'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChaarts/LineChart'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
   <div>
        <Nav/>
        <DaisyNav/>
        <PriceOptions/>
        <LineChart/>
        <Footer/>
   </div>
    </>
  )
}

export default App
