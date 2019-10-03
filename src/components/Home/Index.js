import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  '@keyframes fade': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    animation: '$fade 1.2s forwards',
  },
  mainButton: {
    width: 200,
    margin: 10,
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Link to="/browse">
        <Button color="secondary" variant="contained" className={classes.mainButton}>
          Browse
        </Button>
      </Link>
      <Link to="/review">
        <Button color="secondary" variant="contained" className={classes.mainButton}>
          Review
        </Button>
      </Link>
    </div>
  );
};
