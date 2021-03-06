import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DatePicker from '../Components/DatePicker';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loading: {
    margin: '20px auto',
  },
  container: {
    width: '98vw',
    margin: '0 auto',
    background: 'lightgrey',
  },
  roverInfo: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
  },
  grid: {
    paddingBottom: 40,
  },
  roverPic: {
    height: 300,
    width: 300,
  },
  noImages: {
    paddingLeft: 14,
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

    [newSearchDate[1], newSearchDate[2]] = [newSearchDate[2], newSearchDate[1]]; // using inline array swapping to get it into proper format for API call
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

      <Grid container spacing={1} className={classes.grid}>
        {loading && (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}

        {!loading &&
          roverImages &&
          roverImages.map((img) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={img.id}>
              <img src={img.img_src} className={classes.roverPic} />
            </Grid>
          ))}

        {!loading && roverImages?.length === 0 && (
          <h1 className={classes.noImages}>
            No images from {name} rover available on this day
          </h1>
        )}
      </Grid>
    </div>
  );
};
export default RoverDetails;
