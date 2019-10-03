import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import PageWrapper from '../PageWrapper';
import Header from '../Header';
import Navigation from '../Navigation';

const useStyles = makeStyles(theme => ({
  sliderWrapper: {
    margin: '1.5em 2em',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <PageWrapper>
      <Header
        title="How was the noise level at this place?"
        // subtitle="Let other users know if you experienced any limitations or restrictions."
      />
      
      <div className={classes.sliderWrapper}>
        <Slider
          defaultValue={3}
          aria-labelledby="discrete-slider"
          marks={[
            { value: 1, label: 'Very quiet' },
            { value: 2, label: '' },
            { value: 3, label: 'Light conversation' },
            { value: 4, label: '' },
            { value: 5, label: 'Very loud' },
          ]}
          min={1}
          max={5}
        />
      </div>

      <Navigation page="noise" />
    </PageWrapper>
  );
};
