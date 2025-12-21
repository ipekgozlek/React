//Genelde bu sırayla import edilirler
import { useState } from 'react'
import First from './components/First.jsx'
import FirstClass from './components/FirstClass.jsx'
import './App.css'


function App() {
 const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello Vite + React</h1>
      <div className="card">Hello</div>
      <First isim="İpek" yas={27}/>
      <FirstClass isim="Cem"/>
      <h2>Sayaç</h2>
       <div style={{ padding:"2rem"}}>{count}</div>
       <button onClick={()=> setCount(count+1)}>Arttır</button>
       <button onClick={()=> setCount(count-1)}>Azalt</button>
    </>

  
  )
}


export default App  
