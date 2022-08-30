import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './routes/About';
import MovieShowcase from './routes/MovieShowcase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
          <Route path="About" element={<About />} />
          <Route path="Movies" element={<MovieShowcase />} />
        </Route>
    </Routes>
</BrowserRouter>
);
