import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '35em',
    margin: '1em 0',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  subtitle: {
    fontSize: '.9rem',
    fontWeight: 300,
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title}>{props.title}</Typography>
      <Typography className={classes.subtitle}>{props.subtitle}</Typography>
    </div>
  );
};