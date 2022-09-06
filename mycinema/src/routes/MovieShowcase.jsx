import {useEffect, useState} from 'react';
import Movie from '../components/Movie/Movie';


const MovieShowcase = (props) => {

  const [movieList, setMovieList] = useState();

    useEffect(() => {
      fetchMoviesJSON()
    },[]);

    async function fetchMoviesJSON() {
    const response = await fetch('http://localhost:3005/MovieDatabase');
    const movies = await response.json();
    setMovieList(movies);
  }

  //     const handleSelectedMovie = (movie) => {
  //     console.log("you clicked on", movie.title);
  //     onClick={() => handleSelectedMovie(movie)}

  //     // setMovieList (render(<MovieInfo title={movie.title} genre={movie.genre} image={movie.image} key={movie.id}/>));
  // }

  const handleClick = (movie) => {
    props.setSelectedMovie(movie);
    console.log("clicked on", movie.title);
  }

    return ( 
        <div>
          <h1>Movies</h1>
          <div>
            {movieList ? movieList.map(movie => <Movie onClick={() => handleClick(movie)} title={movie.title} genre={movie.genre} image={movie.image} key={movie.id}/>) : "Loading"}
          </div>
        </div>
     )
}
 
export default MovieShowcase;