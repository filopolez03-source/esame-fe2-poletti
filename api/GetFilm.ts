import type { Movies } from "../src/types/film";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getFilm = async (): Promise<Movies[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
    );
    const data = await response.json();
    console.log(data);

    return data.results;
  } catch (err) {
    throw new Error("Problema nel caricamento film");
  }
};
