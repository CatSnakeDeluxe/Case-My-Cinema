import './MovieInfo.css';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

const MovieInfo = (props) => {

    const [choosenDate, setChoosenDate] = useState(null);

    return ( 
        <div className='container'>

            <div className='movieHeader'>
                <div>
                    <img src={props.selectedMovie.image} alt="" />
                </div>

                <div className='movieHeaderText'>
                    <h2 className='title'>{props.selectedMovie.title}</h2>
                    <h3 className='runtime'>{props.selectedMovie.runtime}</h3>
                    
                    {props.selectedMovie.genre.map(genre => <h4 className='genre' key={genre}>{genre}</h4>)}

                    <h5 className='rating'><AiFillStar color='orange'/>{props.selectedMovie.rating}</h5>
                </div>
            </div>

            <p className='plot'>{props.selectedMovie.plot}</p>

            <form>
                <h3>Choose a date</h3>

                <div className='formDateBox'>
                    {props.selectedMovie.shows.map((date, i) => {
                        return (
                            <p className='pill' onClick={() => setChoosenDate(date.date)} key={i}>{date.date}</p>
                        )
                    })} 
                </div>

                <h3>Choose a time</h3>

                <div className='formTimeBox'>
                        {choosenDate !==null ? props.selectedMovie.shows.filter(date => date.date === choosenDate)[0].name.times.map((time, i) => <p className='pill' key={i}>{time.time}</p>)
                         : <p>Select a date first</p>} 
                </div>

            </form>
            
        </div>
     )
}

export default MovieInfo;