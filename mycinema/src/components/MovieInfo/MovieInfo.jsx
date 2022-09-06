import './MovieInfo.css';

const MovieInfo = (props) => {

    return ( 
        <div className='movieInfoCard'>
            <img src={props.image} alt="" />
            <div className='movieInfoCardDetails'>
                <h2>{props.title}</h2>
                <h5>{props.runtime}</h5>
                {props.genre.map(genre => <h4>{genre}</h4>)}
            </div>
            {/* <button>Book Tickets</button> */}
        </div>
     )
}
 
export default MovieInfo;