import React, { useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Home } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import theme from "../styles/theme";

const useStyles = makeStyles({
  root: {
    width: 500,
    position: "fixed",
    bottom: "0",
    left: "50%",
    boxShadow: "0 0 5px 1px #ccc",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const router = useRouter();

  const onLink = (href) => {
    router.push(href);
  };

  return (
    <BottomNavigation
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        onClick={() => onLink("/")}
        showLabel
        label="Home"
        icon={<Home />}
      />
      <BottomNavigationAction
        showLabel
        onClick={() => onLink("/blog")}
        label="Blog"
        icon={<Icon>article</Icon>}
      />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
