import { Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DatePicker from '../Components/DatePicker';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loading: {
    margin: '20px auto',
  },
  container: {
    padding: 15,
    paddingLeft: 20,
  },
  roverInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  grid: {
    width: '99vw',
    margin: '0 auto',
  },
  roverPic: {
    height: 300,
    width: 300,
  },
});

const RoverDetails = () => {
  const { name } = useParams();
  const classes = useStyles();

  const [searchDate, setSearchDate] = useState(new Date().toLocaleDateString());
  const [roverImages, setRoverImages] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = () => {
    setLoading(true);
    let newSearchDate = searchDate.split('/').reverse();

    [newSearchDate[1], newSearchDate[2]] = [newSearchDate[2], newSearchDate[1]];
    newSearchDate = newSearchDate.join('-');

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${newSearchDate}&api_key=myVdUkv9z8xAeDgHj0CNCxTfO1BzYYMV8bMNklQc`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setRoverImages(data.photos);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchImages();
  }, [searchDate]);

  return (
    <div className={classes.container}>
      <div className={classes.roverInfo}>
        <h1>Rover: {name}</h1>
        <DatePicker date={searchDate} setSearchDate={setSearchDate} />
      </div>

      <Grid container spacing={2} className={classes.grid}>
        {loading && (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}

        {roverImages &&
          roverImages.map((img) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <img src={img.img_src} className={classes.roverPic} />
            </Grid>
          ))}

        {!loading && roverImages?.length === 0 && (
          <h1>No images from {name} available on this day</h1>
        )}
      </Grid>
    </div>
  );
};
export default RoverDetails;
