import React from "react";
import type { Movie } from "../../types/film";

type TypeFilmCard = {
  film: Movie;
};

const FilmCard = ({ film }: TypeFilmCard) => {
  return (
    <div>
      <h2>{film.title}</h2>
    </div>
  );
};

export default FilmCard;
