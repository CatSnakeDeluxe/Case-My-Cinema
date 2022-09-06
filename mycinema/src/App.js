import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import About from './routes/About';
import MovieShowcase from './routes/MovieShowcase';
import MovieInfo from './components/MovieInfo/MovieInfo';
import LandingPage from './routes/LandingPage';
import './App.css';

function App() {

  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<MovieShowcase setSelectedMovie={setSelectedMovie} />} />
            <Route path="/movies/:id" element={<MovieInfo selectedMovie={selectedMovie}/>}>
            </Route>
      </Routes>
    <Outlet />
    </div>
  );
}

export default App;
