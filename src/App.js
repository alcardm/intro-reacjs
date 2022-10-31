import miLogo from "./logo.svg";
import "./css/App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Cover from "./components/cover";
import Rutax from "./components/rutax";
import { Route, Routes } from "react-router-dom";

function App() {
  // aquí puede venir código JS (la lógica del componente).
  // Home es marcado html, por ser html debo pasarle código JS entre corchetes.
  return (
    <div>
      <Navbar logo={miLogo} />
      <Routes>
        <Route path="/" element={<Home logo={miLogo} />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/rutax" element={<Rutax />} />
      </Routes>
    </div>
  );
}

export default App;
