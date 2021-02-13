import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../components/Header";
import { Container, Typography } from "@material-ui/core";

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexFlow: "row wrap",
      "& *": {
        margin: "32px 0 0 0",
      },
    },
    paper: {
      flex: "1",
      flexBasis: "300px",
      overflow: "hidden",
      padding: theme.spacing(5),
    },
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
    </>
  );
}
