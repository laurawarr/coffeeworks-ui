import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Map, { ICONS } from './Map';
import List from './List';

import { browseCafes } from '../../actions/browse'

const styles = {
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
};

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      hoveredCafe: {},
      selectedCafe: {},
    };
    this.updateMarkers = this.updateMarkers.bind(this);
    this.hoverCafe = this.hoverCafe.bind(this);
    this.unhoverCafe = this.unhoverCafe.bind(this);
    this.selectCafe = this.selectCafe.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(browseCafes());
  };

  updateMarkers(markers) {
    markers.forEach((cafe) => {
      const { marker } = cafe;
      marker.addListener('mouseover', () => this.hoverCafe(cafe));
      marker.addListener('mouseout', () => this.unhoverCafe(cafe));
      marker.addListener('click', () => this.selectCafe(cafe));
    });
    this.setState({ markers });
  }

  getMarker(cafe) {
    return cafe.marker || this.state.markers.find(m => m.placeID === cafe.placeID).marker;
  }

  isSelected(cafe) {
    return this.state.selectedCafe && cafe.placeID === this.state.selectedCafe.placeID;
  }

  hoverCafe(cafe) {
    if (this.isSelected(cafe)) return;
    this.setState({ hoveredCafe: cafe });
    this.getMarker(cafe).setIcon(ICONS.hover);
  };

  unhoverCafe(cafe) {
    if (this.isSelected(cafe)) return;
    this.setState({ hoveredCafe: null });
    this.getMarker(cafe).setIcon(ICONS.default)
  };

  selectCafe(cafe) {
    if (this.isSelected(cafe)) return;
    this.setState({ selectedCafe: cafe });
    this.state.markers.map(data => data.marker.setIcon(ICONS.default));
    this.getMarker(cafe).setIcon(ICONS.selected);
  };
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <List
          {...this.props}
          hoverCafe={this.hoverCafe}
          unhoverCafe={this.unhoverCafe}
          selectCafe={this.selectCafe}
          hoveredCafe={this.hoveredCafe}
          selectedCafe={this.selectedCafe}
        />
        <Map
          {...this.props}
          updateMarkers={this.updateMarkers}
          hoverCafe={this.hoverCafe}
          selectCafe={this.selectCafe}
          hoveredCafe={this.hoveredCafe}
          selectedCafe={this.selectedCafe}
        />
      </div>
    );
  };
};

export default connect(state => ({
  cafes: state.browse.cafes,
  mapConfig: state.browse.map,
}))(withStyles(styles)(Browse));
