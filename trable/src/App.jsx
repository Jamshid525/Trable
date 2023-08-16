import { useState } from 'react'
import './App.css'
import Header from './header/header'
import Carrental from './carRental/Carrental'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header />
        <Carrental />
        </div>
    </>
  )
}

export default App
