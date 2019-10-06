import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 300,
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Coffee Not Found</h2>
      <Link to="/browse">
        <Button color="primary" variant="contained">
          Back to Browse
        </Button>
      </Link>
    </div>
  );
};
