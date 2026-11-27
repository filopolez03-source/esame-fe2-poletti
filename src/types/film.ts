export type TypeMovieResponse = {
  page: number;
  result: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  id: string;
  title: string;
  releaseYear?: string;
  vote: number;
  posterUrl: string;
  description: string;
};

export type MovieApiResponse = {
  searchQuery: string;
  page: number;
  maxItems: number;
  totalResults: number;
  results: Movie[];
};

export type HeaderProps = {
  logoText: string;
  buttonLabel: string;
  onButtonClick: () => void;
};

export type MovieCardProps = {
  movie: Movie;
  onDetailsClick: (movieId: string) => void;
};

export type MovieListProps = {
  query: string;
  page: number;
  maxItems: number;
  movies: Movie[];
  onMovieSelect: (movieId: string) => void;
};

export type ApiStatus = "idle" | "loading" | "success" | "error";

export type NavigationTab = "home" | "elenco";

export type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  softcore: boolean;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Movies = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  softcore: boolean;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
