import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Category from "./Category";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Category />
    </div>
  );
};

export default Header;
