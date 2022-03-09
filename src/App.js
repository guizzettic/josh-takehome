import './App.css';
// import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoverListing from './Pages/RoverListing';
import RoverDetails from './Pages/RoverDetails';
import Navbar from './Components/Navbar';

// const useStyles = makeStyles({});

function App() {
  return (
    <Router>
      <div style={{ height: '100vh', width: '100vw', background: 'lightgrey' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<RoverListing />} />
          <Route path="/rover/:name" element={<RoverDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
