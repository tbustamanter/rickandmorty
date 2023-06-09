import style from "./SearchBar.module.css";
import { useState } from "react";


export default function SearchBar({ onSearch }) {
const [id, setId] = useState("");
let idRandom = Math.floor((Math.random() * 826)) + 1; 

const handleChange = (id) => {
   setId(id.target.value);
};

  return (
    <div className={style.container}>
      <input type="search" onChange={handleChange}/>
      <button onClick={() => {onSearch(id)}}>Agregar</button>
      <button onClick={() => {onSearch(idRandom)}}>Agregar Random</button>
    </div>
  );
}
