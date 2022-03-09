import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    background: 'lightgrey',
    paddingTop: 20,
    paddingLeft: 10,
  },
  roverCardInfo: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
  },
  roverCard: {
    background: 'grey',
  },
  roverCameras: {
    height: 150,
    overflow: 'auto',
    background: 'lightgrey',
    borderRadius: 15,
    paddingTop: 10,
    marginTop: -5,
  },
  gridContainer: {
    margin: '0 auto',
    width: '98vw',
  },
});

const RoverListing = () => {
  const url =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=myVdUkv9z8xAeDgHj0CNCxTfO1BzYYMV8bMNklQc';
  const [roversList, setRoversList] = useState(null);
  const classes = useStyles();
  const navigate = useNavigate();

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

  const handleClick = (e, name) => {
    e.preventDefault();
    navigate(`/${name}`);
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={2} className={classes.gridContainer}>
        {roversList &&
          roversList.map((r) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={r.id}>
              <Card
                className={classes.roverCard}
                onClick={(e) => handleClick(e, r.name)}
              >
                <CardHeader
                  title={r.name}
                  titleTypographyProps={{ variant: 'h3' }}
                />
                <CardContent>
                  <div className={classes.roverCardInfo}>
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
                    <ul className={classes.roverCameras}>
                      {r.cameras.map((cam) => (
                        <li key={cam.name}>{cam.name}</li>
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
};

export default RoverListing;
