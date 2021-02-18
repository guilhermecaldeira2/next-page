import React from "react";
import Head from "next/head";
import Link from "next/link"
import Image from "next/image";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Container, Typography } from "@material-ui/core";
import { Instagram, GitHub } from '@material-ui/icons'

import Header from "../components/Header";
import ChipsArray from "../components/Blog/Principal/ChipsArray";

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    section: {
      width: "100%",
      marginTop: "5rem",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      "& > *": {
        marginTop: theme.spacing(3),
      },
      "&:last-child": {
        marginBottom: theme.spacing(10),
      },
    },
    paper: {
      padding: theme.spacing(3),
      position: "relative",
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexFlow: "column",
      paddingTop: "79px"
    },
    imgContainer: {
      position: "absolute",
      top: "-79px",
    },
    icons: {
      textDecoration: "none",
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    chips: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    paragraph: {
      maxWidth: "60%",
      textAlign: "center",
      [theme.breakpoints.down('sm')]: {
        maxWidth: "100%"
      }
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Head>
        <meta charset="utf-8" />
          
        <meta name="language" content="pt-BR" />
          <title>GCGS Página Principal</title>  
        <meta
          name="description"
          content="Chatbots | I.A | Desenvolvimento | Produtividade"
        />
          
        <meta name="robots" content="" />
          
        <meta name="author" content="Guilherme Caldeira Godoy da Silva" />
          
        <meta
          name="keywords"
          content="Desenvolvimento, Chatbot, bot, javascript, typescript, node, telegram, WhatsApp, produtividade"
        />
      </Head>
      <Header />
      <Container maxWidth="lg" className={classes.root}>
        <section className={classes.section}>
          <Paper className={classes.paper}>
            <div className={classes.imgContainer}>
              <Image
                src="/me.png"
                width="158"
                height="159"
              />
            </div>
            <h1>Eng. da computação | Dev Chatbot</h1>
            <h4>guilhermecaldeira.godoy@gmail.com</h4>
            <Paper component="ul" className={classes.chips}>
              <li className={classes.chip}><Link href="https://www.instagram.com/gcaldeira.godoy"><a className={classes.icons}><Instagram /></a></Link></li>
              <li className={classes.chip}><Link href="https://github.com/guilhermecaldeira2"><a className={classes.icons}><GitHub/></a></Link></li>
            </Paper>
            <p className={classes.paragraph}>
              Atualmente trabalho da empresa Weduu com soluções em chatbots, sou apaixonado por investimentos e codar, além de passear com meu cachorro e curtir a namorada. 
            </p>
          </Paper>
        </section>
      </Container>
    </>
  );
}
