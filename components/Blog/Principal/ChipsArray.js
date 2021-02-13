import React from "react";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const ChipsArray = ({ tags, styles }) => {
  const [chipTags, setChipTags] = React.useState([]);

  React.useEffect(() => {
    setChipTags(tags.split(","));
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

  const classes = useStyles();

  return (
    <Paper component="ul" style={styles} className={classes.root}>
      {chipTags.map((tag) => {
        return (
          <li key={tag}>
            <Chip label={tag} className={classes.chip} />
          </li>
        );
      })}
    </Paper>
  );
};

export default ChipsArray;
