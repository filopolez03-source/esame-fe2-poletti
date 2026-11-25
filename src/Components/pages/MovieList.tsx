import React from "react";
import { getFilm } from "../../../api/GetFilm";
import type { Movie } from "../../types/film";
import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

type Props = {};

const MovieList = (props: Props) => {
  const [films, setFilms] = useState<Movie[]>([]);
  const getFilms = async () => {
    const data = await getFilm();
    setFilms(data.result);
  };

  useEffect(() => {
    getFilms();
  }, []);
  return (
    <div>
      {films.map((film) => (
        <FilmCard film={film} />
      ))}
    </div>
  );
};

export default MovieList;
