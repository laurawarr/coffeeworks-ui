import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Search from '@material-ui/icons/Search';

import { hoverCafeCard } from '../../actions/browse';

const useStyles = makeStyles(theme => ({
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  drawerOpen: {
    position: 'relative',
    height: '100%',
    transition: 'flex 500ms',
    maxWidth: 400,
    flex: 5,
  },
  drawerClosed: {
    position: 'relative',
    height: '100%',
    transition: 'flex 500ms',
    width: '15px',
    flex: 0,
  },
  drawerPaper: {
    position: 'relative',
    paddingRight: '.6em',
    overflow: 'visible',
  },
  drawerButton: {
    position: 'absolute',
    right: '-1em',
    background: '#fff',
    bottom: '2em',
    zIndex: -1,
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    '&:hover': {
      background: '#fff',
    },
  },
  cardWrapper: {
    height: '100%',
    overflowY: 'scroll',
    direction: 'rtl',
  },
  card: {
    minHeight: '5em',
    margin: '1em',
    padding: '.5em',
    direction: 'ltr',
    cursor: 'pointer',
    animation: '$fadeIn 300ms forwards',
  },
  emptyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    color: theme.palette.accent.white,
    direction: 'ltr',
  },
  emptyMessage: {
    margin: '.5em 0',
    fontWeight: 400,
  },
  emptyIcon: {
    width: 50,
    height: 50,
  },
}));

export default (props) => {
  const [ drawerOpen, updateDrawer ] = useState(true);
  const { cafes, dispatch } = props;
  const classes = useStyles();

  return (
    <Drawer
      className={drawerOpen ? classes.drawerOpen : classes.drawerClosed}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
      anchor="left"
      open={drawerOpen}
    >
      <IconButton 
        className={classes.drawerButton}
        onClick={() => updateDrawer(!drawerOpen)}
      >
        {drawerOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      
      <div className={classes.cardWrapper}>
        {cafes.length ? cafes.map(cafe => (
          <Link to={`/cafe/${cafe.placeID}`} key={cafe.placeID}>
            <Card
              className={classes.card}
              onMouseOver={() => dispatch(hoverCafeCard(cafe.placeID))}
              onMouseLeave={() => dispatch(hoverCafeCard(null))}
            >
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {cafe.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Link>
        )) : (
          <div className={classes.emptyWrapper}>
            <Search className={classes.emptyIcon}/>
            <h4 className={classes.emptyMessage}>No Cafes Found</h4>
          </div>
        )}
      </div>
    </Drawer>
  );
};
