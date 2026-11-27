import type { Movies } from "../../types/film";

type FilmCardProps = {
  films: Movies;
};

const FilmCard = ({ films }: FilmCardProps) => {
  return (
    <div className="card">
      <div className="card__poster">
        {films.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${films.poster_path}`}
            alt={films.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span>[ Poster ]</span>
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">{films.title}</h3>
        <p className="card__meta">
          Anno: {films.release_date} | Voto: {films.vote_average}
        </p>
        <p className="card__overview">{films.overview}</p>
      </div>
    </div>
  );
};

export default FilmCard;
