import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav({onSearch, logout}) {
    
    return (
        <div className={style.nav}>
            <div className={style.menu}>
            <Link to="/Home"><button >Home</button></Link>
            <Link to="/About"><button>About</button></Link>
            <Link to="/Favorites"><button>Favorites</button></Link>
            </div>
            <div class="title">
            <h1>Rick and Morty</h1>
            </div>
            <SearchBar onSearch={onSearch}  />
            <button onClick={logout}>LogOut</button>
        </div>
        
    );
}