import {useEffect, useState} from 'react';
import Movie from '../components/Movie/Movie';

const MovieShowcase = () => {

    useEffect(() => {
      fetchMoviesJSON()
    },[]);

    const [movieList, setMovieList] = useState()

    async function fetchMoviesJSON() {
    const response = await fetch('http://localhost:3000/MovieDatabase');
    const movies = await response.json();
    setMovieList(movies);
  }

    return ( 
        <div>
          <h1>Movies</h1>
          <div>
            {movieList ? movieList.map(movie => <Movie title={movie.title} genre={movie.genre} image={movie.image}/>) : "Loading"}
          </div>
        </div>
     )
}
 
export default MovieShowcase;