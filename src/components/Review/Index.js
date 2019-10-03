import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Badges from './Pages/Badges';
import Wifi from './Pages/Wifi';
import Beverages from './Pages/Beverages';
import Food from './Pages/Food';
import Noise from './Pages/Noise';

const useStyles = makeStyles(theme => ({
  '@keyframes slide': {
    from: {
      marginRight: '-100vw',
      opacity: 0,
    },
    to: {
      marginRight: 0,
      opacity: 1,
    }
  },
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    animation: '$slide 800ms forwards',
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Switch location={props.location}>
        <Route path="/review" exact component={Badges} />
        <Route path="/review/badges" component={Badges} />
        <Route path="/review/wifi" component={Wifi} />
        <Route path="/review/beverages" component={Beverages} />
        <Route path="/review/food" component={Food} />
        <Route path="/review/noise" component={Noise} />
      </Switch>
    </div>
  );
};
