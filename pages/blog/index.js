import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { getAllPosts } from "../../lib/api";
import Principal from "../../components/Blog/Principal";
import BlogPaper from "../../components/Blog/Paper";
import Header from "../../components/Header";

function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>GCGS Blog</title>
        <meta name="description" content="Blog com conteúdos de Desenvolvimento de Software, produtividade, chatbots e I.A" />
        <meta name="robots" content="all" />
        <meta name="author" content="Guilherme Caldeira Godoy da Silva" />
        <meta name="keywords" content="Blog, Desenvolvimento, Chatbot, bot, javascript, typescript, node, telegram, WhatsApp, produtividade" />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="" />

        <meta property="article:author" content="" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:description" content="" />
      </Head>
      <Header extra="Blog" />
      <Container maxWidth="lg" className={classes.root}>
        <Principal
          imgSrc={heroPost.imgSrc}
          imgAlt={heroPost.imgAlt}
          title={heroPost.title}
          tags={heroPost.tags}
          date={heroPost.date}
          preview={heroPost.preview}
          slug={heroPost.slug}
          postPreview
        />
        {morePosts.map((post) => (
          <BlogPaper
            key={post.title}
            imgSrc={post.imgSrc}
            imgAlt={post.imgAlt}
            title={post.title}
            tags={post.tags}
            date={post.date}
            preview={post.preview}
            slug={post.slug}
          />
        ))}
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
