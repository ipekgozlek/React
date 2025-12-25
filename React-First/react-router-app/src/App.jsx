import Router from "./routes/Router";
import{NavLink} from "react-router";

import "./App.css";

function App() {
  return (
    <>
    <nav>
      <NavLink to="/">Ana Sayfa</NavLink>
    </nav>

      <Router />
    </>
  );
}

export default App;
