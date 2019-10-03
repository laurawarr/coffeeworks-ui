import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';

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
  card: {
    width: 400,
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        Create Account
      </Card> 
    </div>
  );
};
