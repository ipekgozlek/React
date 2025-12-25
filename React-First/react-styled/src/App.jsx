import { useState, useRef, useEffect } from 'react'
import portal from './components/Portal'
// import styled from 'styled-components'
import './App.css'

function App() {
 
  console.log("başlangıç değeri",divRef.current);
  useEffect(() => {
    console.log(divRef.current);
    divRef.current.style.backgroundColor = 'lightblue';
    divRef.current.style.padding = '20px';
    divRef.current.style.marginTop = '20px';
  } ,[]);

   const Button1= styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    font-size: 1.5rem;`;


    const Button2= styled(Button1)`
      background-color: red;
      &:hover {
        background-color: green;
      }
    `;

   const divRef = useRef(); //undefined gelme sebebi
const [portalTarget, setPortalTarget] = useState(document.body);
const [textPortal, setTextPortal] = useState("body");
const handlePortal = () => {
  setPortalTarget(divRef.current);
  setTextPortal("hedef div");
  console.log(divRef.current.textContent);
}

    return (
    <>
      {/* <button>Click Me</button>
      <Button1>Styled Button</Button1>
      <Button2>Styled Button2</Button2> */}
      <button onClick={handlePortal}>Işınla</button>
      <div ref={divRef}>Ref ile hedef div</div>
      <portal target={portalTarget} text={textPortal}/>
    </>
  )
}

export default App;
