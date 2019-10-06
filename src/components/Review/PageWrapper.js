import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    maxWidth: 600,
    margin: 'auto',
  },
}));

const PageWrapper = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {props.children}
    </div>
  );
};

export default connect(state => ({
  direction: state.review.slide,
}))(PageWrapper);
