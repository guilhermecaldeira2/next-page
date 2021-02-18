import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { getAllPosts } from "../../lib/api";
import Principal from "../../components/Blog/Principal";
import BlogPaper from "../../components/Blog/Paper";
import Header from "../../components/Header";

function Blog({ allPosts }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    section: {
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
  }));

  const classes = useStyles();

  return (
    <>
      <Head>
          
        <meta charset="utf-8" />
            
        <meta name="language" content="pt-BR" />
            <title>Blog | Guilherme Caldeira</title>
            
        <meta
          name="description"
          content="Blog com conteúdos de Desenvolvimento de Software, produtividade, chatbots e I.A"
        />
            
        <meta name="robots" content="all" />
            
        <meta name="author" content="Guilherme Caldeira Godoy da Silva" />
            
        <meta
          name="keywords"
          content="Blog, Desenvolvimento, Chatbot, bot, javascript, typescript, node, telegram, WhatsApp, produtividade"
        />
      </Head>
      <Header extra="Blog" />
      <Container maxWidth="lg" className={classes.root}>
        <section className={classes.section}>
          {allPosts.map((post) => (
            <Principal
              imgSrc={post.imgSrc}
              imgAlt={post.imgAlt}
              title={post.title}
              tags={post.tags}
              date={post.date}
              preview={post.preview}
              slug={post.slug}
              postPreview
              key={post.title}
            />
          ))}
        </section>
      </Container>
    </>
  );
}

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "tags",
    "author",
    "content",
    "imgSrc",
    "imgAlt",
    "preview",
  ]);

  return {
    props: { allPosts },
  };
};
