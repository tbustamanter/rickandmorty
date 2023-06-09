import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"

//desestructurando la propiedad characters de props
export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}> 
      {characters.map(({id, name, status, gender, species, origin, image}) => {
        return (
          <Card
            id = {id}
            key = {id}
            name = {name}
            status={status}
            species = {species}
            gender={gender}
            origin={origin.name}
            image={`${image}`}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
