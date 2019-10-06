import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import PageWrapper from '../PageWrapper';
import Header from '../Header';
import Navigation from '../Navigation';

const useStyles = makeStyles(theme => ({
  sliderWrapper: {
    margin: '1.5em 2em',
  },
}));

export default (props) => {
  const classes = useStyles();
  const { cafe } = props;
  return (
    <PageWrapper>
      <Header
        title={`How would you rate the beverages at ${cafe.name || 'this place'}?`}
        // subtitle="Let other users know if you experienced any limitations or restrictions."
      />
      
      <div className={classes.sliderWrapper}>
        <Typography>Selection</Typography>
        <Slider
          defaultValue={3}
          aria-labelledby="discrete-slider"
          marks={[
            { value: 1, label: 'Only drip coffee' },
            { value: 2, label: '' },
            { value: 3, label: 'Average' },
            { value: 4, label: '' },
            { value: 5, label: 'All things coffee' },
          ]}
          min={1}
          max={5}
        />
      </div>

      <div className={classes.sliderWrapper}>
        <Typography>Quality</Typography>
        <Slider
          defaultValue={3}
          aria-labelledby="discrete-slider"
          marks={[
            { value: 1, label: 'Terrible' },
            { value: 2, label: '' },
            { value: 3, label: 'Average' },
            { value: 4, label: '' },
            { value: 5, label: 'Outstanding' },
          ]}
          min={1}
          max={5}
        />
      </div>

      <Navigation />
    </PageWrapper>
  );
};
