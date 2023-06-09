import React, { useState, useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

// también se puede hacer destructuring por recibir un objeto
// Card({name, status, species, gender, origin})
function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const [closeBt, setCloseBt] = useState(true);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  useEffect(() => {
    if (!props.onClose) {
      setCloseBt(false);
    }
  }, []);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        {isFav ? (
          <button className={style.fav} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={style.fav} onClick={handleFavorite}>🤍</button>
        )}
        {closeBt && (
          <button
            className={style.button}
            onClick={() => props.onClose(props.id)}
          >
            X
          </button>
        )}
      </div>

      <img className={style.image} src={`${props.image}`} alt="" />
      <Link to={`/Detail/${props.id}`}>
        <h2 className={style.name}>{props.name}</h2>
      </Link>
      <h2 className={style.specie}>{props.species}</h2>
      <h2 className={style.gender}>{props.gender}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
