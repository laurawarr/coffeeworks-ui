import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { fetchCafe } from '../../actions/cafe';

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
}));

const Cafe = (props) => {
  const classes = useStyles();
  const { dispatch, cafe } = props;
  const { id } = props.match.params;

  useEffect(() => dispatch(fetchCafe(id)), []);

  return <div className={classes.main}>{cafe.name || 'No name yet'}</div>;
};

export default connect(state => ({
  cafe: state.cafe,
}))(Cafe);