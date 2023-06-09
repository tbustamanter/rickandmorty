import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Card.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) =>
      setCharacter(response.data)
    );
  }, [id]);

  return (
    <div className={style.detailContainer}>
      {character.name ? (
        <>
          <div className={style.image}>
            <img src={character.image} alt={character.name} />
          </div>
          <div className={style.desc}>
            <h1>Name: {character.name}</h1>
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Origin: {character.origin?.name}</h3>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
