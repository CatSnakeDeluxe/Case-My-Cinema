import { Link } from "react-router-dom";
import { GiFilmProjector } from 'react-icons/gi';
import './Nav.css';

const Nav = () => {
    return ( 
        <nav>
            <GiFilmProjector className='projector'/>
            <div className="triangle"></div>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/about">About</Link>
        </nav>
     )
}
 
export default Nav;