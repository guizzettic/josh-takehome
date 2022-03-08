import './App.css';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

function App() {
  const url =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=myVdUkv9z8xAeDgHj0CNCxTfO1BzYYMV8bMNklQc';
  const [roversList, setRoversList] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchRovers = () => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setRoversList(data.rovers);
        })
        .catch((error) => console.log(error));
    };

    fetchRovers();
  }, []);

  return (
    <div className="App">
      {roversList &&
        roversList.map((r) => (
          <div
            style={{
              border: '2px solid grey',
              width: 200,
              margin: 5,
              padding: 10,
            }}
          >
            {r.id}
            {r.name}
          </div>
        ))}
    </div>
  );
}

export default App;
