import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
import Nav from './components/Nav/Nav';
// import SelectedMovie from './components/SelectedMovie/SelectedMovie';
import './App.css';

function App() {

  return (
    <div className="App">
        <Nav />
        {/* <button onClick={() => setShow(true)}>Open Modal</button> */}
        {/* <SelectedMovie onClose={() => setShow(false)} show={show}/> */}
        <Outlet />
    </div>
  );
}

export default App;
