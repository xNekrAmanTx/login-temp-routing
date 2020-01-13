import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
        
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" />
      <BottomNavigationAction label="Login" />

    </BottomNavigation>
  );
}