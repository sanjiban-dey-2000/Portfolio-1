import React from 'react'
import "./index.css"
import {LoadingScreen} from './components/LoadingScreen'
import { useState } from 'react'
import Navbar from './components/Navbar'
import MobileMeno from './components/MobileMeno'
import Home from './components/sections/Home'

const App = () => {
  const [isLoading,setIsloading]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={()=>setIsloading(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoading?"opacity-100" :"opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMeno menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
      </div>
    </>
  )
}

export default App