import { useState,useEffect } from 'react';
import Button from './components/Atoms/Button';
import './App.css'

function App() {
 const [count, setCount] = useState(0);
  useEffect(() => { // her render aşamasında çalışır
    console.log('useEffect çalıştı');
  });
   useEffect(() => { // sadece başlangıçta çalışır
    console.log('useEffect başlangıçta (mount aşamasında) çalıştı');
  }, []);
   useEffect(() => { // count değiştiğinde çalışır
    console.log('useEffect count’a bağlı effect');
  }, [count]);
   useEffect(() => { // şimdilik çalışmayacak burda dursun
    return () => {
      console.log('useEffect unmount aşamasında çalıştı');
    }
  }, []);
  return (
    <>
    <h1 onClick={() => setCount(count + 1)}>React useEffect {count} kez tıklandı</h1>
   <Button />
    </>
  );
}

export default App;
