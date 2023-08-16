import { useState } from 'react'
import './App.css'
import Header from './header/header'
import Carrental from './carRental/Carrental'
import Other_Car from './other_car/Other_Car'
import ClientSays from './clientSays/ClientSays'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header />
        <Carrental />
        <Other_Car />
        <ClientSays />
      </div>
    </>
  )
}

export default App
