import { Card, Stack } from "react-bootstrap";
import { Movie } from "../hooks/useMovies";
import ProvidersIconList from "./ProvidersIconList";
import { Link } from "react-router-dom";
import MovieScore from "./MovieScore";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card className="m-1">
      <Card.Img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        variant="top"
      />
      <Card.Body style={{ height: "30%" }}>
        <Stack direction="horizontal" className="justify-content-between">
          <ProvidersIconList movie={movie} />
          <MovieScore score={movie.vote_average} />
        </Stack>
        <Card.Title>
          <Link
            className="text-decoration-none"
            to={`/`}
            style={{ fontSize: "1.5em" }}
          >
            {movie.title}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
