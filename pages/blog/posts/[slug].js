import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";

import Principal from "../../../components/Blog/Principal";
import Header from "../../../components/Header";

const Post = ({ post }) => {
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

  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>Blog | {post.title}</title>
        <meta name="description" content={post.preview} />
        <meta name="robots" content="all" />
        <meta name="author" content="Guilherme Caldeira Godoy da Silva" />
        <meta name="keywords" content={post.tags} />

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
      <Header extra="Blog"/>
      <Container maxWidth="lg" className={classes.root}>
        <Principal
          imgSrc={post.imgSrc}
          imgAlt={post.imgAlt}
          title={post.title}
          tags={post.tags}
          date={post.date}
          preview={post.preview}
          slug={post.slug}
        />
        <div
          style={{ marginBottom: "100px", width: "90%", fontSize: "125%", fontFamily: "Montserrat" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
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

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
