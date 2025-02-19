import React from "react";
import { Card } from "react-bootstrap";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Card.Img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        variant="top"
      />
      <Card.Title>{movie.title}</Card.Title>
    </Card>
  );
};

export default MovieCard;
