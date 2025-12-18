import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First.jsx'

function App() {

  return (
    <>
      <h1>Hello Vite + React</h1>
      <div className="card">Hello</div>
      <First isim="İpek" yas={27}/>
    </>
  )
}

export default App
