import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import PageWrapper from '../PageWrapper';
import Header from '../Header';
import Navigation from '../Navigation';

import { updateReviewField } from '../../../actions/review';

const useStyles = makeStyles(theme => ({
  sliderWrapper: {
    margin: '1.5em 2em',
  },
}));

export default (props) => {
  const classes = useStyles();
  const { dispatch, cafe, review } = props;
  const { wifiSpeed, wifiRestrictions } = review.fields;

  return (
    <PageWrapper>
      <Header
        title={`How would you rate the Wi-Fi at ${cafe.name || 'this place'}?`}
        subtitle="Let other users know if you experienced any limitations or restrictions."
      />
      
      <div className={classes.sliderWrapper}>
        <Typography>Speed</Typography>
        <Slider
          value={wifiSpeed}
          aria-labelledby="discrete-slider"
          marks={[
            { value: 0, label: 'Very slow' },
            { value: 1, label: '' },
            { value: 2, label: 'Average' },
            { value: 3, label: '' },
            { value: 4, label: 'Blazing fast' },
          ]}
          min={0}
          max={4}
          onChange={(e, val) => dispatch(updateReviewField(val, 'wifiSpeed'))}
        />
      </div>

      <div className={classes.sliderWrapper}>
        <Typography>Restrictions (ex. time limits)</Typography>
        <Slider
          value={wifiRestrictions}
          aria-labelledby="discrete-slider"
          marks={[
            { value: 0, label: 'Very limited' },
            { value: 1, label: '' },
            { value: 2, label: 'Average' },
            { value: 3, label: '' },
            { value: 4, label: 'No restrictions' },
          ]}
          min={0}
          max={4}
          onChange={(e, val) => dispatch(updateReviewField(val, 'wifiRestrictions'))}
        />
      </div>

      <Navigation />
    </PageWrapper>
  );
};
