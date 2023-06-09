import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };
    case ORDER:
      let ordering = [];

      if (action.payload === "A") {
        ordering = state.myFavorites.sort((a, b) => {
          return a.id - b.id;
        });
      } else {
        ordering = state.myFavorites.sort((a, b) => {
          return b.id - a.id;
        });
      }

      return {
        ...state,
        myFavorites: [...ordering],
      };
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };
  }
};

export default rootReducer;
