import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { updateBrowseMap, updateBrowseMapConfig, hoverCafeMarker } from '../../actions/browse';
import { throttle } from '../../actions/helpers';

const { InfoWindow } = window.google.maps;

const useStyles = makeStyles(theme => ({
  root: {
    flex: 5,
    height: '100%',
    background: theme.palette.accent.white,
  },
  infoWindow: {
    color: theme.palette.accent.dark,
  },
}));

export const ICONS = {
  default: {
    path: window.google.maps.SymbolPath.CIRCLE,
    fillColor: '#D73A31',
    fillOpacity: 1,
    strokeColor: 'white',
    strokeWeight: 1,
    scale: 6
  },
  hover: {
    path: window.google.maps.SymbolPath.CIRCLE,
    fillColor: '#08708A',
    fillOpacity: 1,
    strokeColor: 'white',
    strokeWeight: 1,
    scale: 6
  },
  selected: null,
  pin: null,
};

export default (props) => {
  const classes = useStyles();
  const { dispatch, cafes, map, mapConfig } = props;
  const { Map } = window.google.maps;

  const selectCafeMarker = (placeID = null) => {
    const targetCafe = cafes.find((cafe) => cafe.placeID === placeID);
    if (targetCafe) {
      const { marker } = targetCafe;
      const content = `<div class=${classes.infoWindow}>${targetCafe.name}</div>`;
      new InfoWindow({ content }).open(map, marker);
    }
  };

  useEffect(() => {
    const map = new Map(document.getElementById('map'), mapConfig);
    map.addListener('center_changed', throttle(() => {
      dispatch(updateBrowseMapConfig({ ...mapConfig, center: map.getCenter().toJSON() }))
    }, 5000));
    dispatch(updateBrowseMap(map));
  }, []);

  useEffect(() => {
    cafes.forEach((cafe) => {
      cafe.marker.addListener('mouseover', () => dispatch(hoverCafeMarker(cafe.placeID)));
      cafe.marker.addListener('mouseout', () => dispatch(hoverCafeMarker(null)));
      cafe.marker.addListener('click', () => selectCafeMarker(cafe.placeID));
    });
  }, [cafes]);

  return <div id="map" className={classes.root} />
}