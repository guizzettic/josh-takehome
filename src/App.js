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
        <Routes>
          <Route path="/" element={<RoverListing />} />
          <Route path="/rover/:name" element={<RoverDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
