import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import About from './routes/About';
import MovieShowcase from './routes/MovieShowcase';
import MovieInfo from './components/MovieInfo/MovieInfo';
import LandingPage from './routes/LandingPage';
import './App.css';

function App() {

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    fetchMoviesJSON()
  },[]);

  async function fetchMoviesJSON() {
  const response = await fetch('http://localhost:3005/MovieDatabase');
  const movies = await response.json();
  setMovieList(movies);
}

  return (
    <div className="App">
      <Nav />
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<MovieShowcase movieList={movieList} setSelectedMovie={setSelectedMovie} />} />
            <Route path="/movies/:id" element={<MovieInfo selectedMovie={selectedMovie}/>}/>
      </Routes>
    </div>
  );
}

export default App;
