import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import { updateReviewSlide } from '../../actions';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '35em',
    margin: '1em 0',
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  const { dispatch, slideIndex, slideCount } = props;

  const handleNav = (index) => {
    let newIndex = index;
    newIndex = Math.max(newIndex, 0)
    newIndex = Math.min(newIndex, slideCount - 1)
    dispatch(updateReviewSlide(newIndex));
  }

  return (
    <div className={classes.wrapper}>
      {slideIndex > 0 ? (
        <Button onClick={() => handleNav(slideIndex - 1)}>
          <ChevronLeft /> Back
        </Button>
      ) : <div />}
      {slideIndex < slideCount - 1 ? (
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleNav(slideIndex + 1)}
        >
          Next <ChevronRight />
        </Button>
      ) : (
        <Button
          color="primary"
          variant="contained"
          onClick={() => dispatch(push('/'))}
        >
          Done
        </Button>
      )}
    </div>
  );
};

export default connect(state => ({
  slideIndex: state.review.slideIndex,
  slideCount: state.review.slideCount,
}))(Navigation);
