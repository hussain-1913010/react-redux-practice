import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'

function App() {

  return (
    <>
      <Navbar/>
      <UserDetails/>
    </>
  )
}

export default App
