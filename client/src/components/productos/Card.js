import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Card.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 225,
    height: 320,
    marginLeft: 35,
    marginBottom: 35,
    backgroundColor: "#F0F0F2"

  },
  media: {
    height: 100,
  },
});

export default function CardProduct() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://megasports.vteximg.com.br/arquivos/ids/188382-1000-1000/06200035005_0.jpg?v=637365845877400000"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pelota Marca Nike
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            Tiene un valor en el mercado bastante elevado. Está en perfecto
            estado
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className="card">
        <Button size="small" color="primary">
          Ver más
        </Button>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            $2.500
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
}
