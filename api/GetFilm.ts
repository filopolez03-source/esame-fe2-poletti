import type { TypeMovieResponse } from "../src/types/film";

export const getFilm = async (): Promise<TypeMovieResponse> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=7cfa092eb77c3de68a2e8b11b26d7799",
  );
  const data = await response.json();
  return data;
};
