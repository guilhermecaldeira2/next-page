import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { getAllPosts } from "../../lib/api";
import Principal from "../../components/Blog/Principal";
import BlogPaper from "../../components/Blog/Paper";

function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Todos os Posts</title>
      </Head>
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
