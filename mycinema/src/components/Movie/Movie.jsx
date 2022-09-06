import './Movie.css';

const Movie = (props) => {

    return ( 
        <div onClick={props.onClick} className="movie">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            {props.genre.map(genre => <h4>{genre}</h4>)}
        </div>
     )
}
 
export default Movie;