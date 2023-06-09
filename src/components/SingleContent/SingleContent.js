import React from 'react';
import { img_300, unavailable } from '../../config/config';
import "./SingleContent.css";
import { Badge } from '@mui/material';
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {
  return (
    <div className="media">
    <Badge badgeContent={vote_average} color={vote_average>7 ? "primary":"secondary"}/>
     <img className="poster"src={poster?  `${img_300}/${poster}` : unavailable } alt={title}/>
     <b className="title">{title}</b>
     <span class="subTitle">{media_type=== "tv" ? "TV Series" : "Movie"}</span>
     <span className="subTitle">{date}</span>
    </div>
  );
};

export default SingleContent;
