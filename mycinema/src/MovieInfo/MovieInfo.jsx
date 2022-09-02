import movieList from '../routes/MovieShowcase'

const MovieInfo = ({movieList}) => {
    return ( 
        <h2>{movieList.title}</h2>
     );
}
 
export default MovieInfo;