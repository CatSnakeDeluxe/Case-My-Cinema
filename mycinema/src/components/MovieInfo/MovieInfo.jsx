import './MovieInfo.css';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

const MovieInfo = (props) => {

    const [choosenDate, setChoosenDate] = useState(null);
    const [choosenTime, setChoosenTime] = useState(null);
    const [choosenSeat, setChoosenSeat] = useState(null);

    function pickSeats(movie, date, time) {
        const correctPlaytime = movie.shows.find(shows => shows.date === date);
        const correctTime = correctPlaytime.timesObject.times.find(times => times.time === time);
        return correctTime.seats;
    }

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

            <h2 className='bookTicketsHeading'>Book Tickets Below</h2>

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
                    {choosenDate !==null ? props.selectedMovie.shows.filter(date => date.date === choosenDate)[0].timesObject.times.map((time, i) => <p className='pill' onClick={() => setChoosenTime(time.time) } key={i}>{time.time}</p>)
                     : <p>Select a date first</p>} 
                </div>

                <h3>Choose seats</h3>

                <div className='formSeatsBox'>
                    {choosenTime !==null ? pickSeats(props.selectedMovie, choosenDate, choosenTime).map((seats, i) => <div className='seat' key={i}>{seats}</div>): ""}
                </div>

            </form>
            
        </div>
     )
}

export default MovieInfo;