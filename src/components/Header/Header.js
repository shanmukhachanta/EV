import React from 'react';
import useStyles from './styles.js'; // Import your custom CSS styles

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.headerText}>EV Charge Stations</h1>
    </div>
  );
};

export default Header;
