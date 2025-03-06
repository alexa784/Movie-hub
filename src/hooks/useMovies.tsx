import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiClient, ResponseData } from "../services/api-client";
import getEndpoint from "../services/getEndpoint";
import getFavoriteMovies from "../services/getFavoriteMovies";
import useQueryMovieStore from "../stores/movieQueryStores";
import Movie from "../models/movie";

const useMovies = () => {
  const { queryMovies } = useQueryMovieStore();
  const endPoint = getEndpoint(queryMovies);
  const apiClient = new ApiClient<ResponseData<Movie>>(endPoint);

  const favoriteMoviesObj = getFavoriteMovies();
  const infinteQueryObj = useInfiniteQuery<ResponseData<Movie>, Error>({
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
  return queryMovies.searchParam === "favorites"
    ? favoriteMoviesObj
    : infinteQueryObj;
};

export default useMovies;
