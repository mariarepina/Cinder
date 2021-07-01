import Zak from "../../images/Zak.jpeg";
import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import LiForFirstScroll from './LiForFirstScroll';

export default function ScrollBar({id}) {

  const [infoAboutFilm, setInfoAboutFilm] = useState({});
  const superLikes = useSelector(state=> state.superLikes);


  const movieInfo = (id) => {
    fetch(
      `https://api.kinopoisk.cloud/movies/${id}/token/efcf5da3f88fef737921b0cd9182b8d6`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutFilm(data));
  }
 
  useEffect(() => {
  movieInfo(id)
 }, [])

 

  return (
  
      
       
     <LiForFirstScroll/>

        
     
    
  );
}
