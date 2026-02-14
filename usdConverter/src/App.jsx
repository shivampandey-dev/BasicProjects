import { useState } from 'react'

import './App.css'
import useCurrencyInfo from "./hooks/useCurrency"
import { InputBox } from "./components/InputBox"
function App() {
  const data = useCurrencyInfo("inr")
 
  return (

    <>
      <div>
        <InputBox/>
      </div>

    </>
  )
}

export default App
