import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CafeNotFound from './CafeNotFound';
import { fetchCafe } from '../../actions/cafe';

const useStyles = makeStyles(theme => ({
  '@keyframes fade': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
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

const Cafe = (props) => {
  const classes = useStyles();
  const { dispatch, cafe } = props;
  const { id } = props.match.params;

  useEffect(() => dispatch(fetchCafe(id)), []);

  return <div className={classes.main}>
    {!cafe ? (
      <CafeNotFound />
    ) : (
      <React.Fragment>
        {cafe.name}
        <Link to={`/cafe/${id}/review`}>
          <Button color="primary" variant="contained" className={classes.mainButton}>
            Rate this Cafe
          </Button>
        </Link>
      </React.Fragment>
    )}
  </div>;
};

export default connect(state => ({
  cafe: state.cafe,
}))(Cafe);