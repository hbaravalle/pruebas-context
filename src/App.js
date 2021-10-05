import { useState, createContext } from "react";
import "./styles.css";
import Alpha from "./components/Alpha";
import Gamma from "./components/Gamma";
import userContext from "./contexts/userContext";

export default function App() {
  const [nombre, setNombre] = useState("Sin nombre");
  const handleNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  return (
    <userContext.Provider value={{ nombre, setNombre }}>
      <div className="App">
        <Alpha />
      </div>
    </userContext.Provider>
  );
}
