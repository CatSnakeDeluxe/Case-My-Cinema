import {useEffect, useState} from 'react';
import Movie from '../components/Movie/Movie'

const MovieShowcase = () => {
    
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
    
    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovieList(data))
    },[]);

    return ( 
        <div>
          <h1>Movies</h1>
          <div>
            {movieList.map(movie => <Movie title={movie.title} genre={movie.genre} image={movie.image}/>)}
          </div>
        </div>
     )
}
 
export default MovieShowcase;