import Movie from '../components/Movie/Movie';
import { useNavigate } from 'react-router-dom';

const MovieShowcase = (props) => {

  const navigate = useNavigate();

  const handleClick = (movie) => {
    props.setSelectedMovie(movie);
    console.log("clicked on", movie.title);
    navigate(`/movies/${movie.id}`);
  }

    return ( 
        <div>
          <h1>Movies in theatre</h1>
          <div>
            {props.movieList ? props.movieList.map(movie => <Movie onClick={() => handleClick(movie)} title={movie.title} genre={movie.genre} image={movie.image} key={movie.id}/>) : "Loading"}
          </div>
        </div>
     )
}
 
export default MovieShowcase;