import { InfiniteData, useQueries } from "@tanstack/react-query";
import useMovie from "../hooks/useMovie";
import { Movie } from "../hooks/useMovies";
import useFavoriteMoviesStore from "../stores/favoriteMoviesStore";
import { ApiClient, ResponseData } from "./api-client";


//  const { data, error, isLoading, fetchNextPage, hasNextPage } = useMovies();
const getFavoriteMovies = () => {
    const { favorites } = useFavoriteMoviesStore();
    const apiClient = new ApiClient<Movie>(`/3/movie/`);

    const data = useQueries({
        queries: favorites.map((id) => ({
            queryKey: ['movie', id],
            queryFn: () => apiClient.fetchMovie(id,{params:{
                append_to_response:"videos,images,credits"
            }}),
        })),
    });
    console.log(data);

    const movies=data.map(d=>d.data);
    console.log(movies);

    const filteredMovies = movies.filter(Boolean) as Movie[];
    return {
      data: {
        pages: [
          { results: filteredMovies, page: 1, total_pages: 1, total_results: 1 },
        ] as ResponseData<Movie>[],
      },
      error: null,
      isLoading: false,
      fetchNextPage: () => {},
      hasNextPage: false,
    };
  };

export default getFavoriteMovies;