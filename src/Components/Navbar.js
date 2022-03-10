import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Typography, createTheme, ThemeProvider } from '@material-ui/core';
const useStyles = makeStyles({
  container: {
    height: 150,
    background: 'darkgreen',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 800,
    color: 'white',
    letterSpacing: 4,
  },
  subTitle: { color: 'tan', marginTop: '-30px' },
});

const theme = createTheme();
theme.typography.h1 = {
  fontSize: '2rem',
  color: 'white',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};
theme.typography.h4 = {
  fontSize: '1.2rem',
  color: 'white',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container} onClick={() => navigate('/')}>
      <ThemeProvider theme={theme}>
        <Typography className={classes.title} variant="h1">
          NASA Rover Lookups
        </Typography>
        <Typography className={classes.subTitle} variant="h4">
          Visual insight with up to date imagery
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
