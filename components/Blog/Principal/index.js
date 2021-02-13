import React from "react";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import MaterialLink from "@material-ui/core/Link";

import { useFetch } from "../../../lib/fetcher";
import ChipsArray from "./ChipsArray";

function Principal({
  imgSrc,
  imgAlt,
  title,
  tags,
  date,
  preview,
  slug,
  postPreview,
}) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      position: "relative",
      flex: "1",
    },
    link: {
      position: "absolute",
      top: "0",
      lef: "0",
      right: "0",
      bottom: "0",
      width: "100%",
      height: "100%",
      zIndex: "1",
    },
    article: {
      position: "relative",
      zIndex: 0,
      width: "100%",
    },
    content: {
      display: "flex",
      flexFlow: "row wrap",
      position: "relative",
      top: "0",
      lef: "0",
      right: "0",
      bottom: "0",
      width: "100%",
      height: "100%",
      zIndex: "0",
    },
    image: {
      position: "relative",
      display: "block",
      minHeight: "273px",
      minWidth: "273px",
      flex: "4",
    },
    text: {
      display: "flex",
      flexFlow: "column wrap",
      flex: "6",
      padding: theme.spacing(3),
      "& > *": {
        marginBottom: theme.spacing(3),
      },
    },
    infos: {
      marginTop: theme.spacing(3),
      "& > *": {
        marginLeft: theme.spacing(3),
      },
    },
    chips: {
      width: "30%",
    },
  }));

  const classes = useStyles();

  const { data } = useFetch(
    `/api/${postPreview ? "page-views-preview" : "page-views"}?id=${slug}`
  );

  const views = data?.total;

  return (
    <Paper className={classes.paper}>
      <article className={classes.article}>
        <Link href={`/blog/posts/${encodeURIComponent(slug)}`}>
          <a className={classes.link}></a>
        </Link>
        <div className={classes.content}>
          <div className={classes.image}>
            <Image
              src={imgSrc ?? "/blog/book.jpg"}
              alt={imgAlt ?? "Post Image"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={classes.text}>
            <Typography variant="h5">{title}</Typography>
            <ChipsArray tags={tags} />
            <div className={classes.infos}>
              <Chip icon={<Icon>calendar_today</Icon>} label={date} />
              <Badge
                color="primary"
                badgeContent={views ?? "..."}
                max={999}
                showZero
              >
                <Icon fontSize="large">pageview</Icon>
              </Badge>
            </div>
            <Divider className={classes.divider} />
            <Typography variant="body1">{preview}</Typography>
          </div>
        </div>
      </article>
    </Paper>
  );
}

export default Principal;
