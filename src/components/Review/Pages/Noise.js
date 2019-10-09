import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const { noiseLevel } = review.fields;
  return (
    <PageWrapper>
      <Header
        title={`How was the noise level at ${cafe.name || 'this place'}?`}
        // subtitle="Let other users know if you experienced any limitations or restrictions."
      />
      
      <div className={classes.sliderWrapper}>
        <Slider
          value={noiseLevel}
          aria-labelledby="discrete-slider"
          marks={[
            { value: 0, label: 'Very quiet' },
            { value: 1, label: '' },
            { value: 2, label: 'Light conversation' },
            { value: 3, label: '' },
            { value: 4, label: 'Very loud' },
          ]}
          min={0}
          max={4}
          onChange={(e, val) => dispatch(updateReviewField(val, 'noiseLevel'))}
        />
      </div>

      <Navigation />
    </PageWrapper>
  );
};
