import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  category: {
    display: "flex",
    overflowX: "scroll",
    [theme.breakpoints.up("md")]: {
      overflowX: "hidden",
    },
    "& li": {
      listStyleType: "none",
      padding: "10px 20px",
      [theme.breakpoints.up("md")]: {
        overflowX: "hidden",
      },
      "&:hover": {
        background: "#F3F1F5",
      },
    },
  },
}));

const Category = () => {
  const classes = useStyles();

  return (
    <Box bgcolor="background.paper">
      <Container>
        <ul className={classes.category}>
          <li>Trending</li>
          <li>New</li>
          <li>Old</li>
          <li>Chill</li>
          <li>Classical</li>
          <li>Pop</li>
          <li>Rock</li>
          <li>Playlist</li>
        </ul>
      </Container>
    </Box>
  );
};

export default Category;
