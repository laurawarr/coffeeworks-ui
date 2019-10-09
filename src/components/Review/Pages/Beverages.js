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
  const { beverageSelection, beverageQuality } = review.fields;
  return (
    <PageWrapper>
      <Header
        title={`How would you rate the beverages at ${cafe.name || 'this place'}?`}
        // subtitle="Let other users know if you experienced any limitations or restrictions."
      />
      
      <div className={classes.sliderWrapper}>
        <Typography>Selection</Typography>
        <Slider
          value={beverageSelection}
          aria-labelledby="discrete-slider"
          marks={[
            { value: 0, label: 'Only drip coffee' },
            { value: 1, label: '' },
            { value: 2, label: 'Average' },
            { value: 3, label: '' },
            { value: 4, label: 'All things coffee' },
          ]}
          min={0}
          max={4}
          onChange={(e, val) => dispatch(updateReviewField(val, 'beverageSelection'))}
        />
      </div>

      <div className={classes.sliderWrapper}>
        <Typography>Quality</Typography>
        <Slider
          value={beverageQuality}
          aria-labelledby="discrete-slider"
          marks={[
            { value: 0, label: 'Terrible' },
            { value: 1, label: '' },
            { value: 2, label: 'Average' },
            { value: 3, label: '' },
            { value: 4, label: 'Outstanding' },
          ]}
          min={0}
          max={4}
          onChange={(e, val) => dispatch(updateReviewField(val, 'beverageQuality'))}
        />
      </div>

      <Navigation />
    </PageWrapper>
  );
};
