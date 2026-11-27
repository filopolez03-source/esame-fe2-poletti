import { getFilm } from "../../../api/GetFilm";
import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";
import type { Movies } from "../../types/film";

const MovieList = () => {
  const [films, setFilms] = useState<Movies[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getFilms = async () => {
    try {
      const data = await getFilm();
      setFilms(data);
      setLoading(false);
    } catch (err) {
      setError("ERRORE DURANTE RECUPERO");
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  if (loading)
    return (
      <div className="main">
        <h3 className="page-title">LOADING. . . </h3>
      </div>
    );
  if (error)
    return (
      <div className="main">
        <h3 className="page-title">{error}</h3>
      </div>
    );
  if (!films)
    return (
      <div className="main">
        <h3 className="page-title">NON CI SONO FILM AL MOMENTO</h3>
      </div>
    );
  return (
    <div className="main">
      <div className="movie-grid">
        {films.map((film) => (
          <FilmCard key={film.id} films={film} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
