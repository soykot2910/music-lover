import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardContent: {
    display: "flex",
    padding: "8px 5px",
    "& div": {
      marginLeft: "10px",
      marginTop: "5px",
      marginRight: "5px",
    },
  },
  singerImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
});

export default function MusicCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBjb3ZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <img
            src="https://image.shutterstock.com/image-photo/singer-holding-microphone-stand-performing-260nw-1039242106.jpg"
            alt="shiren"
            className={classes.singerImg}
          />
          <div>
            <h4>The Chainsmoker - don't lie</h4>
            <h4>Depest</h4>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
