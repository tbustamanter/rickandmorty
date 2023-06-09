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
            <button onClick={logout}>LogOut</button>
            <SearchBar onSearch={onSearch}  />
        </div>
        
    );
}