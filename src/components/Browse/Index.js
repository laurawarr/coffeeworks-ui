import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Map from './Map';
import List from './List';

import { updateBrowseMapConfig, browseCafes } from '../../actions/browse'

const useStyles = makeStyles(theme => ({
  '@keyframes slide': {
    from: { marginLeft: '-100vw' },
    to: { marginLeft: 0 }
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    animation: '$slide 800ms forwards',
  },
}));

const Browse = (props) => {
  const { dispatch, mapConfig } = props;
  const classes = useStyles();

  useEffect(() => {
    const config = { ...mapConfig };
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        config.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        dispatch(updateBrowseMapConfig(config));
      });
    }
  }, []);

  useEffect(() => dispatch(browseCafes()), [mapConfig]);

  return (
    <div className={classes.main}>
      <List {...props} />
      <Map {...props} />
    </div>
  );
};

export default connect(state => ({
  cafes: state.browse.cafes,
  mapConfig: state.browse.mapConfig,
}))(Browse);
