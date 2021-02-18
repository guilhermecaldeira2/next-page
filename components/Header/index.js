import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import theme from '../../styles/theme';

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
      fontSize: '7.5vw',
      margin: "0 0 0 1rem",
    },
    extra: {
      fontSize: "6vw",
      margin: "0 0 1.5vw 1vw"
    },
    [theme.breakpoints.up('sm')]: {
      title: {
        fontSize: '3rem',
      },
      extra: {
        fontSize: "1.5rem",
        margin: "0 0 .35rem .2rem"
      }
    }
  });
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <h1 className={classes.title}>Guilherme Caldeira</h1>
      <span className={classes.extra}>{extra}</span>
    </header>
  );
}

export default Header;