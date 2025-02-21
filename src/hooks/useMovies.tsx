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
  vote_average: number;
  popularity: number;
}
const apiClient = new ApiClient<ResponseData<Movie>>("/3/discover/movie");

const useMovies = () => {
  const { queryMovies } = useQueryMovieStore();

  console.log(`useMovies= genre= ${queryMovies.genreId}`);
  return useQuery({
    queryKey: ["movies", queryMovies],
    queryFn: () =>
      apiClient.fetchData({
        params: {
          include_adult: true,
          with_genres: queryMovies.genreId,
          with_watch_providers: queryMovies.providerId, // with_watch_providers always use with watch_region!
          watch_region: "US",
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useMovies;
