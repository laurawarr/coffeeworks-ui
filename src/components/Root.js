import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@material-ui/styles';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Home from './Home/Index'
import Login from './Login/Index'
import SignUp from './SignUp/Index'
import Browse from './Browse/Index'
import Cafe from './Cafe/Index'
import Review from './Review/Index'

import globalTheme from '../theme.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
  },
  appBar: {
    boxShadow: '0 0 0 #fff',
  },
  button: {
    marginLeft: '.5em',
  },
  homeButton: {
    marginRight: globalTheme.spacing(1),
    width: '2em',
    height: '2em',
    padding: 0,
  },
  homeIcon: {
    width: '100%',
  },
  title: {
    flexGrow: 1,
  },
}));

const Root = (props) => {
  const classes = useStyles();
  const { dispatch, location, history } = props;
  return (
    <ThemeProvider theme={globalTheme}>
      <div className={classes.root}>
        <AppBar
          color="secondary"
          position="static"
          classes={{ root: location.pathname === '/browse' ? null : classes.appBar }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.homeButton}
              color="inherit"
              onClick={() => dispatch(push('/'))}
            >
              <img
                className={classes.homeIcon}
                src="./images/coffee_circle.svg"
                alt="coffeeworks logo"
              />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              coffeeworks
            </Typography>
            <Button
              className={classes.button}
              color="inherit"
              onClick={() => dispatch(push('/login'))}
            >
              Login
            </Button>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={() => dispatch(push('/create-account'))}
            >
              Create Account
            </Button>
          </Toolbar>
        </AppBar>

        <ConnectedRouter history={history}>
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/create-account" component={SignUp} />
            <Route path="/browse" component={Browse} />
            <Route path="/cafe/:id" exact component={Cafe} />
            <Route path="/cafe/:id/review" component={Review} />
            <Redirect to='/' />
          </Switch>
        </ConnectedRouter>
      </div>
    </ThemeProvider>
  );
}

export default connect(state => ({
  location: state.router.location,
}))(Root);
