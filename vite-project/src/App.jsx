import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Intro from './Components/Intro'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Qualification from './Components/Qualification'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <Intro/>
    <Skills/>
    <Portfolio/>
    <Qualification/>
    <Blogs/>
    <Footer/>
    </>
  )
}

export default App
