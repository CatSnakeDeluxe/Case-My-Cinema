import './Movie.css';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import MovieShowcase from '../../routes/MovieShowcase';
import { useState } from 'react';

const Movie = (props) => {

    // MovieShowcase.handleSelectedMovie();

    const [choosenMovie, setChoosenMovie] = useState();

    const handleSelectedMovie = () => {
        console.log("you clicked on", props.title);
        setChoosenMovie(current => !current);
    }

    return ( 
        <div onClick={() => handleSelectedMovie()} className="movie">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            {props.genre.map(genre => <h4>{genre}</h4>)}
            
        {choosenMovie && (
            <div>
                <h2>{props.title}</h2>
                {/* <SelectedMovie title={props.title}/> */}
            </div>
        )}

        </div> 
     )
}
 
export default Movie;