import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

function Header({ extra }) {
  const useStyles = makeStyles({
    root: {
      fontFamily: 'Playfair Display',
      fontWeight: '900',
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end"
    },
    title: {
      fontSize: '5rem',
      margin: "0 0 0 3rem",
    },
    extra: {
      fontSize: "2.5rem",
      padding: "0 0 .6rem .2rem"
    }
  });
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <h1 className={classes.title}>GCGS</h1>
      <span className={classes.extra}>{extra}</span>
    </header>
  );
}

export default Header;