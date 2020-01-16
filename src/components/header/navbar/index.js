import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const paths = ['/home', '/login','/admin']

  function handleClick(where) {
    props.history.push(where);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(e,newValue) => {
        if(props.username && newValue === 1) return;
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >

      <BottomNavigationAction label="Home" onClick={() => handleClick(paths[0])} />
      <BottomNavigationAction label="Login" onClick={() => {handleClick(paths[1]);}} />
      <BottomNavigationAction label="Admin" onClick={() => handleClick(paths[2])} />

    </BottomNavigation >
  )
}

export default withRouter(SimpleBottomNavigation);