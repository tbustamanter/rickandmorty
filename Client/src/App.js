import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Card/Detail";
import About from "./Views/About";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error from "./Views/Error";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      return error.message;
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  };

  const login = async (userData)=> {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {}
  }
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <>
          <Nav onSearch={onSearch} logout={logout} />
        </>
      ) : (
        <h1>Inicia Sesión</h1>
      )}
      <Routes>
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
