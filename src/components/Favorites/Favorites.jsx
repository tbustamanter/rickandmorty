import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { filterCards, orderCards, resetFavorites } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    setAux(false);
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => dispatch(filterCards(event.target.value));

  const handleReset = () =>{
    dispatch(resetFavorites())
  }
  return (
    <div className={style.container}>
      <div className={style.selectors}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} defaultValue="Select one">
          {["Male", "Female", "Genderless", "unknown"].map((gender, id) => {
            return <option key={id} value={gender}>{gender}</option>
          })}
        </select>
        <button onClick={handleReset}>Reset</button>
      </div>

      {favorites.map(({ id, name, status, gender, species, origin, image }) => {
        return (
          <Card
            id={id}
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={`${image}`}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
