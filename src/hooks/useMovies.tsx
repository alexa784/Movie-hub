// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

import { useQuery } from "@tanstack/react-query";
import { ApiClient, ResponseData } from "../services/api-client";

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
  return useQuery({
    queryKey: ["movies"],
    queryFn: apiClient.fetchData,
  });
};

export default useMovies;
