// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiClient, ResponseData } from "../services/api-client";
import getEndpoint from "../services/getEndpoint";
import useQueryMovieStore from "../stores/movieQueryStores";

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}
interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  genres: [{ id: number; name: string }];
  vote_average: number;
  popularity: number;
  overview: string;
  videos: { results: Video[] };
  credits: { cast: Person[] };
  production_companies: Company[];
}
const useMovies = () => {
  const { queryMovies } = useQueryMovieStore();
  const endPoint = getEndpoint(queryMovies);
  const apiClient = new ApiClient<ResponseData<Movie>>(endPoint);

  return useInfiniteQuery<ResponseData<Movie>, Error>({
    queryKey: ["movies", queryMovies],
    queryFn: ({ pageParam = 1 }) => {
      return apiClient.fetchData({
        params: {
          include_adult: false,
          with_genres: queryMovies.genreId,
          with_watch_providers: queryMovies.providerId, // with_watch_providers always use with watch_region!
          watch_region: "US",
          query: queryMovies.searchText,
          sort_by: queryMovies.searchParam,
          page: pageParam,
        },
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1 < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useMovies;
