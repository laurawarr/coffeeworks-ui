import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { updateBrowseMap, hoverCafeMarker } from '../../actions/browse';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 5,
    height: '100%',
    background: theme.palette.accent.white,
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
  const { dispatch, cafes, mapConfig } = props;
  const { Map } = window.google.maps;

  useEffect(() => {
    const map = new Map(document.getElementById('map'), mapConfig);
    dispatch(updateBrowseMap(map));
  }, [mapConfig]);

  useEffect(() => {
    cafes.forEach((cafe) => {
      cafe.marker.addListener('mouseover', () => dispatch(hoverCafeMarker(cafe.placeID)));
      cafe.marker.addListener('mouseout', () => dispatch(hoverCafeMarker(null)));
      // cafe.marker.addListener('click', () => selectCafe(cafe.placeID));
    });
  }, [cafes]);

  return <div id="map" className={classes.root} />
}