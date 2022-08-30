import './Movie.css';

const Movie = (props) => {
    return ( 
        <div className="movie">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <h4>{props.genre}</h4>  
        </div>
     )
}
 
export default Movie;