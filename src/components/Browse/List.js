import React, { useState } from 'react';
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

import { hoverCafeCard } from '../../actions/browse';

const useStyles = makeStyles(theme => ({
  drawerOpen: {
    position: 'relative',
    flex: 5,
    height: '100%',
    transition: 'flex 500ms',
  },
  drawerClosed: {
    position: 'relative',
    flex: 0,
    height: '100%',
    width: '15px',
    transition: 'flex 500ms',
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
    // minWidth: 400,
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
        {cafes.map(cafe => (
          <Card
            key={cafe.placeID}
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
        ))}
      </div>
    </Drawer>
  );
};
