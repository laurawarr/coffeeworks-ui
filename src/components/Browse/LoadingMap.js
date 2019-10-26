import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <p>Loading...</p> */}
    </div>
  );
};
