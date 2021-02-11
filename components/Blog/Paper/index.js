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

function BlogPaper({ imgSrc, imgAlt, title, date, preview, slug }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "90%",
      // height: theme.spacing(55),
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      position: "relative",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "center",
      "& > *": {
        marginLeft: theme.spacing(3),
      },
      [theme.breakpoints.down("xs")]: {
        flexWrap: "wrap",
        marginBottom: "100px",
        "& > *": {
          marginLeft: 0,
        },
      },
    },
    imgContainer: {
      position: "relative",
      display: "block",
      height: "132px",
      width: "223px",
      padding: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        minHeight: "100px",
        height: "100%",
        width: "100%",
      },
    },
    content: {
      position: "relative",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      alignItems: "flex-start",
      height: "100%",
    },
    infos: {
      position: "relative",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      overflow: "hidden",
      height: "100%",
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  const { data } = useFetch(`/api/page-views-preview?id=${slug}`, true);

  const views = data?.total;

  return (
    <Paper className={classes.root}>
      <div className={classes.imgContainer}>
        <Image
          src={imgSrc ?? "/blog/book.jpg"}
          alt={imgAlt ?? "Learning Book"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <Divider orientation="vertical" flexItem />
      <div className={classes.content}>
        <Link href={`/blog/posts/${encodeURIComponent(slug)}`}>
          <MaterialLink style={{cursor: "pointer"}} color="inherit">
            <Typography variant="h5">{title}</Typography>
          </MaterialLink>
        </Link>
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
        <Typography variant="subtitle1">{preview}</Typography>
      </div>
    </Paper>
  );
}

export default BlogPaper;
