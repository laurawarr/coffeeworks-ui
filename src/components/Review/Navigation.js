import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import { updateSlideDirection } from '../../actions';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '35em',
    margin: '1em 0',
  },
}));

const pages = ['badges', 'wifi', 'beverages', 'food', 'noise'];

const Navigation = (props) => {
  const classes = useStyles();
  const { dispatch, page } = props;
  const current = pages.indexOf(page);
  const handleNav = (direction, page) => {
    dispatch(updateSlideDirection(direction));
    dispatch(push(`/review/${page}`));
  }

  return (
    <div className={classes.wrapper}>
      {current > 0 ? (
        <Button onClick={() => handleNav('back', pages[Math.max(current - 1, 0)])}>
          <ChevronLeft /> Back
        </Button>
      ) : <div />}
      {current < pages.length - 1 ? (
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleNav('forward', pages[Math.min(current + 1, pages.length - 1)])}
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

export default connect()(Navigation);
