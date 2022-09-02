import {useEffect, useState} from 'react';
import Movie from '../components/Movie/Movie';
import SelectedMovie from '../components/SelectedMovie/SelectedMovie';

const MovieShowcase = () => {

  const [movieList, setMovieList] = useState();
  // const [choosenMovie, setChoosenMovie] = useState();

    useEffect(() => {
      fetchMoviesJSON()
    },[]);

    async function fetchMoviesJSON() {
    const response = await fetch('http://localhost:3005/MovieDatabase');
    const movies = await response.json();
    setMovieList(movies);

    
    // Movie.handleSelectedMovie = () => {
    // console.log("you clicked on", props.title);
    // setChoosenMovie(current => !current);
    // }

  //   {choosenMovie && (
  //     <div>
  //         {/* <h2>{props.title}</h2> */}
  //         <SelectedMovie title={movieList.title}/>
  //     </div>
  // )}
  }

    return ( 
        <div>
          <h1>Movies</h1>
          <div>
            {movieList ? movieList.map(movie => <Movie title={movie.title} genre={movie.genre} image={movie.image} key={movie.id}/>) : "Loading"}
          </div>
        </div>
     )
}
 
export default MovieShowcase;