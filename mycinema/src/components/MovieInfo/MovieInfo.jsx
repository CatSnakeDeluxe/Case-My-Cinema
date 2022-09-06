import './MovieInfo.css';
import { AiFillStar } from 'react-icons/ai';

const MovieInfo = (props) => {

    return ( 
        <div onClick={props.selectedMovie.onClick}>

            <div className='movieHeader'>
                <div>
                    <img src={props.selectedMovie.image} alt="" />
                </div>

                <div className='movieHeaderText'>
                    <h2 className='title'>{props.selectedMovie.title}</h2>
                    <h3 className='runtime'>{props.selectedMovie.runtime}</h3>
                    
                    {props.selectedMovie.genre.map(genre => <h4 className='genre'>{genre}</h4>)}

                    <h5 className='rating'><AiFillStar color='orange'/>{props.selectedMovie.rating}</h5>
                </div>
            </div>

            <p className='plot'>{props.selectedMovie.plot}</p>

            <h3>Choose a date</h3>

            <div className='dates'>
                {props.selectedMovie.dates.map(dates => <h4 className='pill'>{dates}</h4>)}
            </div>


            <h3>Choose a time</h3>

            <div className='times'>
                {props.selectedMovie.playtimes.map(playtimes => <h4 className='pill'>{playtimes}</h4>)}
            </div>
            

            <button className='bookButton'>Book Seats</button>
        </div>
     )
}
 
export default MovieInfo;