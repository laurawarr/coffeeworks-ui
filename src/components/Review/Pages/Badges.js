import React from 'react';
import { chunk } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Beverage from '@material-ui/icons/EmojiFoodBeverage';
import Staff from '@material-ui/icons/SupervisorAccount';
import Food from '@material-ui/icons/Fastfood';
import Wifi from '@material-ui/icons/Wifi';
import Seating from '@material-ui/icons/EventSeat';
import Power from '@material-ui/icons/Power';

import PageWrapper from '../PageWrapper';
import Header from '../Header';
import Navigation from '../Navigation';

import { updateReviewField } from '../../../actions/review';

const useStyles = makeStyles(theme => ({
  badgeWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  badge: {
    margin: '1em',
    width: '10em',
    height: '10em',
    padding: 5,
  },
  badgeSelected: {
    color: theme.palette.accent.light.main,
    background:  theme.palette.accent.light.opacity('.08'),
    '&:hover': {
      background: theme.palette.accent.light.opacity('.15'),
    },
    border: '1px solid',
  },
  badgeIcon: {
    fontSize: 40,
  },
  badgeLabel: {
    display: 'flex',
    flexDirection: 'column',
    color: 'inherit',
  },
  badgeText: {
    display: 'block',
    fontSize: 10,
    marginTop: '.5em',
  },
}));

const badges = chunk([
  { key: 'beverages', label: 'Beverages', icon: Beverage },
  { key: 'service', label: 'Staff & Service', icon: Staff },
  { key: 'food', label: 'Food', icon: Food },
  { key: 'wifi', label: 'Wi-Fi', icon: Wifi },
  { key: 'seating', label: 'Seating Availability', icon: Seating },
  { key: 'outlets', label: 'Access to Power Outlets', icon: Power },
], 3);

export default (props) => {
  const classes = useStyles();
  const { dispatch, cafe, review } = props;
  const { badges: selectedBadges } = review.fields;

  const toggleSelectedBadge = badgeKey =>
    dispatch(updateReviewField(
      { ...selectedBadges, [badgeKey]: !selectedBadges[badgeKey] },
      'badges',
    ));

  return (
    <PageWrapper>
      <Header
        title={`What did ${cafe.name || 'this place'} do exceptionally well?`}
        subtitle="Select all that apply."
      />
      {badges.map((badgeRow, idx) => (
        <div key={idx} className={classes.badgeWrapper} >
          {badgeRow.map(badge => (
            <Button
              key={badge.key}
              className={classes.badge}
              classes={{
                label: classes.badgeLabel,
                containedPrimary: classes.badgeSelected,
              }}
              variant="contained"
              color={selectedBadges[badge.key] ? 'primary' : 'secondary'}
              onClick={() => toggleSelectedBadge(badge.key)}
            >
              <badge.icon className={classes.badgeIcon} />
              <Typography className={classes.badgeText}>{badge.label}</Typography>
            </Button>
          ))}
        </div>
      ))}
      <Navigation />
    </PageWrapper>
  );
};
