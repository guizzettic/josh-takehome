import './App.css';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core';

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
  console.log(roversList[3]);
  return (
    <div style={{ width: '98.8%', padding: 15 }}>
      <Grid container spacing={2}>
        {roversList &&
          roversList.map((r) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              key={r.id}
              style={{
                border: '2px solid grey',
                borderRadius: 10,
                background: 'lightgrey',
              }}
            >
              <Card style={{ background: 'grey' }}>
                <CardHeader
                  title={r.name}
                  // style={{ fontSize: '32px', fontWeight: 900 }}
                />
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>
                      <strong>Total Photos:</strong> {r.total_photos}
                    </label>
                    <label>
                      <strong>Launch Date:</strong> {r.launch_date}
                    </label>
                    <label>
                      <strong>Landing Date:</strong> {r.landing_date}
                    </label>
                    <p>
                      <strong>Cameras available: {r.cameras.length}</strong>
                    </p>
                    <ul
                      style={{
                        height: 200,
                        overflow: 'auto',
                        background: 'lightgrey',
                        borderRadius: 15,
                      }}
                    >
                      {r.cameras.map((cam) => (
                        <li>{cam.name}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default App;
