import { useContext } from "react";
import userContext from "../contexts/userContext";

export default function Delta() {
  const { nombre, setNombre } = useContext(userContext);
  return (
    <>
      <h4>Soy Delta y conozco tu nombre: {nombre}</h4>
      <button
        onClick={() => {
          setNombre("Leia Organa");
        }}
      >
        Cambiar nombre a Leia Organa
      </button>
    </>
  );
}
