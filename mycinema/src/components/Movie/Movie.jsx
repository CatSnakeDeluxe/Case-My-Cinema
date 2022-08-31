import './Movie.css';
// import { useState } from 'react';

const Movie = (props) => {

    // const [show, setShow] = useState(false);
    // onClick={() => setShow(true)}

    return ( 
        <div  className="movie">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            {props.genre.map(genre => <h4>{genre}</h4>)}
        </div>
     )
}
 
export default Movie;