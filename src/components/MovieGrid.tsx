import React from "react";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";
import { Spinner } from "react-bootstrap";
import useMoviesByTitle from "../hooks/useMoviesByTitle";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();

  if (error) throw new Error("Server ne salje podatke!");
  if (isLoading) return <Spinner />;

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
        {data?.results.map((m) => (
          <div className="col" key={m.id}>
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieGrid;
