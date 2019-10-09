import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';

import Badges from './Pages/Badges';
import Wifi from './Pages/Wifi';
import Beverages from './Pages/Beverages';
import Food from './Pages/Food';
import Noise from './Pages/Noise';
import CafeNotFound from '../Cafe/CafeNotFound';

import { fetchCafe } from '../../actions/cafe';
import { resetReviewState } from '../../actions/review'

const useStyles = makeStyles(theme => ({
  '@keyframes slide': {
    from: {
      marginRight: '-100vw',
      opacity: 0,
    },
    to: {
      marginRight: 0,
      opacity: 1,
    }
  },
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    // animation: '$slide 800ms forwards',
  },
}));

const Review = (props) => {
  const classes = useStyles();
  const { dispatch, cafe, review } = props;
  const { slideIndex } = review;
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(fetchCafe(id));
    dispatch(resetReviewState());
  }, []);

  return !cafe ? (
    <CafeNotFound />
  ) : (
    <div className={classes.main}>
      <SwipeableViews index={slideIndex}>
        <Badges {...props} />
        <Wifi {...props} />
        <Beverages {...props} />
        <Food {...props} />
        <Noise {...props} />
      </SwipeableViews>
    </div>
  );
};

export default connect(state => ({
  cafe: state.cafe,
  review: state.review,
}))(Review);
