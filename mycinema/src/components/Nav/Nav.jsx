import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (        
        
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
           
     )
}
 
export default Nav;