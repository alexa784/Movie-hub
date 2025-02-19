import React from "react";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";
import { Spinner } from "react-bootstrap";

const dummy = [0, 1, 2, 3, 4, 5, 6, 7];

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();

  if (error) throw error;
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
/**Vidjeti na bootstrap 5 gridu kako ovo funkcionise */
export default MovieGrid;
