import ListItem from './components/ListItem';
import './App.css';
import style from './CustomStyle.module.css';
function App() {
  const students = ['Ali', 'Ayşe', 'Fatma', 'Ahmet', 'Mehmet'];
  return (
    <>
    <ul>
      {students.map((item,index) => (
        <ListItem key={index} student={item} />
      ))}
    </ul>
    <button className="Button">Click Me</button>
    <button className={style.customButton}>Click Me2</button>
    </>
  );
}

export default App;
