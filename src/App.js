import './App.css';
// import { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Switch, Routes } from 'react-router';
import RoverListing from './Pages/RoverListing';
import RoverDetails from './Pages/RoverDetails';

// const useStyles = makeStyles({});

function App() {
  return (
    <Router>
      <div style={{ height: '100vh', width: '100vw' }}>
        <div
          style={{
            height: 140,
            background: 'darkgreen',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            fontSize: '30px',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontWeight: 800,
              color: 'white',
              letterSpacing: 4,
            }}
          >
            NASA Rover Lookups
          </h1>
          <h4
            style={{
              color: 'tan',
              marginTop: '-50px',
            }}
          >
            Visual insight with up to date imagery
          </h4>
        </div>
        <Routes>
          <Route path="/" element={<RoverListing />} />
          <Route path="/rover/:name" element={<RoverDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
