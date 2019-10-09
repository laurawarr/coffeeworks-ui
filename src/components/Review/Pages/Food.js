import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import PageWrapper from '../PageWrapper';
import Header from '../Header';
import Navigation from '../Navigation';

import { updateReviewField } from '../../../actions/review';

export default (props) => {
  const { dispatch, cafe, review } = props;
  const { foodOptionsLevel } = review.fields;
  return (
    <PageWrapper>
      <Header
        title={`What level of food did ${cafe.name || 'this place'} offer?`}
        // subtitle="Let other users know if you experienced any limitations or restrictions."
      />
      
      <RadioGroup
        value={foodOptionsLevel}
        onChange={(e, val) => dispatch(updateReviewField(val, 'foodOptionsLevel'))}
      >
        <FormControlLabel value="0" control={<Radio color="primary"/>} label="They don't offer food" />
        <FormControlLabel value="1" control={<Radio color="primary"/>} label="Light fare" />
        <FormControlLabel value="2" control={<Radio color="primary"/>} label="Full meals" />
        <FormControlLabel value="unknown" control={<Radio color="primary"/>} label="I'm not sure" />
        <FormControlLabel value="default" control={<span/>} />
      </RadioGroup>

      <Navigation />
    </PageWrapper>
  );
};
