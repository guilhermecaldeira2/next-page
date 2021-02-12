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
import MaterialLink from "@material-ui/core/Link"

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
    link: {
      width: "90%",
    },
    root: {
      // height: theme.spacing(55),
      width: "100%",
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      position: "relative",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      position: "relative",
      display: "block",
      height: "372px",
      width: "50%",
      padding: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        minHeight: "336px",
        height: "100%",
        width: "100%",
      },
    },
    content: {
      position: "relative",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "start",
      height: "100%",
    },
    infos: {
      position: "relative",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    divider: {
      width: "100%",
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      width: "60%",
      height: theme.spacing(20),
      padding: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const { data } = useFetch(
    `/api/${postPreview ? "page-views-preview" : "page-views"}?id=${slug}`
  );

  const views = data?.total;

  return (
    <Link href={`/blog/posts/${encodeURIComponent(slug)}`}>
      <MaterialLink  className={classes.link} style={{cursor: "pointer"}} color="inherit">
        <Paper className={classes.root}>
          <div className={classes.container}>
            <Image
              src={imgSrc ?? "/blog/book.jpg"}
              alt={imgAlt ?? "Post Image"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={classes.container}>
            <div className={classes.content}>
                  <Typography variant="h5">{title}</Typography>
              {/* <Typography variant="subtitle1">{tags}</Typography> */}
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
        </Paper>
      </MaterialLink>
    </Link>
  );
}

export default Principal;
