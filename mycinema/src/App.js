import {useEffect, useState} from 'react';
import { Outlet } from "react-router-dom";
import Movie from "./components/Movie/Movie"
import Nav from "./components/Nav/Nav"
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    
    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovieList(data))
  },[]);

  return (
    <div className="App">
        <Nav />
        <h1>Movies</h1>
        <div>
          {movieList.map(movie => <Movie title={movie.title} genre={movie.genre} image={movie.image}/>)}
        </div>
        <Outlet />
    </div>
  );
}

export default App;
