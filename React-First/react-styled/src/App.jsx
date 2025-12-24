import { useState, useRef, useEffect } from 'react'
// import styled from 'styled-components'
import './App.css'

function App() {
  const divRef = useRef(); //undefined gelme sebebi
  console.log("başlangıç değeri",divRef.current);
  useEffect(() => {
    console.log(divRef.current);
    divRef.current.style.backgroundColor = 'lightblue';
    divRef.current.style.padding = '20px';
    divRef.current.style.marginTop = '20px';
  } );
  //  const Button1= styled.button`
  //   background-color: blue;
  //   color: white;
  //   padding: 10px 20px;
  //   font-size: 1.5rem;`;


  //   const Button2= styled(Button1)`
  //     background-color: red;
  //     &:hover {
  //       background-color: green;
  //     }
  //   `;

    return (
    <>
      {/* <button>Click Me</button>
      <Button1>Styled Button</Button1>
      <Button2>Styled Button2</Button2> */}
      <div ref={divRef}>Ref ile hedef div</div>
    </>
  )
}

export default App;
