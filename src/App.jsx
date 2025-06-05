import React from 'react'
import "./index.css"
import {LoadingScreen} from './components/LoadingScreen'
import { useState } from 'react'

const App = () => {
  const [isLoading,setIsloading]=useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={()=>setIsloading(true)}/>}
    </>
  )
}

export default App