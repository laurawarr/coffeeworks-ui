import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import PageWrapper from '../PageWrapper';
import Header from '../Header';
import Navigation from '../Navigation';

export default (props) => {
  const { cafe } = props;
  return (
    <PageWrapper>
      <Header
        title={`What level of food did ${cafe.name || 'this place'} offer?`}
        // subtitle="Let other users know if you experienced any limitations or restrictions."
      />
      
      <RadioGroup>
        <FormControlLabel value="none" control={<Radio color="primary"/>} label="They don't offer food" />
        <FormControlLabel value="light" control={<Radio color="primary"/>} label="Light fare" />
        <FormControlLabel value="full" control={<Radio color="primary"/>} label="Full meals" />
      </RadioGroup>

      <Navigation />
    </PageWrapper>
  );
};
