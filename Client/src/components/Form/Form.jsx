import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";


export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  

  const handleChange = (event) => {
    const property = event.target.name;
    const val = event.target.value;
    setUserData({ ...userData, [property]: val });
    validation(userData, errors, setErrors);
  };

 const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
 }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Email: </label>
        <input
          value={userData.email}
          onChange={handleChange}
          type="text"
          name="email"
        ></input>
        <p className={style.error}>{errors.email}</p>
      </div>
      <div>
        <label>Password: </label>
        <input
          value={userData.password}
          type="text"
          name="password"
          onChange={handleChange}
        ></input>
        <p className={style.error}>{errors.password}</p>
      </div>

      <button type="submit" >Iniciar sesión</button>
    </form>
  );
}
