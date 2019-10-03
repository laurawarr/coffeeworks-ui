import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const PageWrapper = (props) => {
  const [classes] = useState(makeStyles(theme => ({
    '@keyframes slideforward': {
      from: {
        marginRight: '-100vw',
        opacity: 0,
      },
      to: {
        marginRight: 0,
        opacity: 1,
      }
    },
    '@keyframes slideback': {
      from: {
        marginLeft: '-100vw',
        opacity: 0,
      },
      to: {
        marginLeft: 0,
        opacity: 1,
      }
    },
    wrapper: {
      animation: `$slide${props.direction} 800ms forwards`,
    },
  }))());

  return (
    <div className={classes.wrapper}>
      {props.children}
    </div>
  );
};

export default connect(state => ({
  direction: state.review.slide,
}))(PageWrapper);
