// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

import { useQuery } from "@tanstack/react-query";
import { ApiClient, ResponseData } from "../services/api-client";
import useQueryMovieStore from "../stores/movieQueryStores";

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
}
const apiClient = new ApiClient<ResponseData<Movie>>(
  "/3/discover/movie?include_adult=false"
);

const useMovies = () => {
  const { queryMovies } = useQueryMovieStore();

  console.log(`useMovies= genre= ${queryMovies.genreId}`);
  return useQuery({
    queryKey: ["movies", queryMovies],
    queryFn: () =>
      apiClient.fetchData({
        params: {
          with_genres: queryMovies.genreId,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useMovies;
