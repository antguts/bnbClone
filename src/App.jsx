import { useState } from 'react'
import radiationImg from './assets/radiationLogo.png'
import './App.css'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Cards from './components/Cards'


export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroBanner />
      <Cards />
    </>
  )
}


