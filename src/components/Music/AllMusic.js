import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MusicCard from "./MusicCard/MusicCard";

const data = [1, 2, 3, 4];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2rem 0",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AllMusic() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {data.map((item) => (
          <Grid container item lg={3} md={4} sm={6} xs={12} spacing={3}>
            <MusicCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
