import { useState } from 'react'
import styled from 'styled-components'
import './App.css'

function App() {
   const Button1= styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    font-size: 1.5rem;`;

  return (
    <>
      <button>Click Me</button>
      <Button1>Styled Button</Button1>
    </>
  )
}

export default App;
