import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import "./Card.css";
const useStyles = makeStyles({
  border: {
    border: "1px solid black",
    color: "black;",
    marginTop: "2px",
    padding: "4px",
  },
});

export default function CardSolo() {
  const classes = useStyles();
  const [films, setFilms] = useState([]);
  let movies= useSelector(state=>state.films);
  console.log(movies);
  console.log(id)
  useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/compilation').then(res=>setFilms(res.data))
  },[]) 




  const [infoAboutMovie, setInfoAboutMovie] = useState({});
  const movieInfo = (id) => {
    fetch(
      `https://api.kinopoisk.cloud/movies/${id}/token/dbe6c6c687384869b64e1ea5479766ab`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutMovie(data));
    //const currMovie = response.json()
    //return currMovie
  }
 useEffect(() => {
  movieInfo(id)
 }, [])
 


  return (
    <div className="card">
      <div className="dws-wrapper">
        <a>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="fucking card"
              height="100%"
              image={infoAboutMovie?.poster}
              title="Contemplative Reptile"
            />

            <div className="dws-text">
              <h2 gutterBottom variant="h5" component="h2">
                {infoAboutMovie?.title}
              </h2>
              <hr />
              <p variant="body2" component="p">
                {infoAboutMovie?.description}
              </p>
            </div>
          </CardActionArea>
        </a>
      </div>
      <Button size="small" marginRight="10px" className={classes.border}>
        Трейлер
      </Button>
      <Button size="small" align="rigth" className={classes.border}>
        Комментарии
      </Button>
    </div>
  );
}
