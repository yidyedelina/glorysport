import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TopNav from './components/navbar/TopNav'
import Middle from './components/middle/Middle'
import Slip from './components/slip/Slip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-auto">
     <TopNav></TopNav>
      <Middle/>
      <Slip></Slip>
    </div>
  )
}

export default App
