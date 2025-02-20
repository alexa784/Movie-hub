import React from "react";
import { Movie } from "../hooks/useMovies";
import useProvidersByMovieId from "../hooks/useProvidersByMovieId";
import { Spinner, Image, Button } from "react-bootstrap";

interface Props {
  movieId: Movie;
}

const ProvidersIconList = ({ movieId }: Props) => {
  const { providers, error, isLoading } = useProvidersByMovieId(movieId.id);

  if (error) throw error;
  if (isLoading) return <Spinner />;
  const limit = 4;

  return (
    <div>
      {providers?.slice(0, limit + 1).map((p) => (
        <Image
          className="mb-1 me-2"
          src={"https://image.tmdb.org/t/p/w92" + p.logo_path}
          alt="logo"
          width={"40px"}
          style={{ borderRadius: "25%" }}
        />
      ))}
      <button className="btn btn-outline-primary">. . .</button>
    </div>
  );
};
/** Srediti da lijepo izgleda lista providera */
/** Provjeriti da li radi sortiranje po provideru */
// https://image.tmdb.org/t/p/w500/ ok
export default ProvidersIconList;
