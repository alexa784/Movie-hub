import { Card, Stack } from "react-bootstrap";
import { Movie } from "../hooks/useMovies";
import ProvidersIconList from "./ProvidersIconList";
import { Link } from "react-router-dom";
import MovieScore from "./MovieScore";
import Emoji from "./Emoji";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const imagePath = movie.backdrop_path
    ? "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
    : noImage;
  return (
    <Card className="m-1 mb-2">
      <Link to={`movie/${movie.id}`}>
        <Card.Img src={imagePath} variant="top" />
      </Link>
      <Card.Body style={{ height: "30%" }}>
        <Stack direction="horizontal" className="justify-content-between mb-1">
          <ProvidersIconList movie={movie} />
          <MovieScore score={movie.vote_average} />
        </Stack>
        <Card.Title className="mb-1">
          <Link className="text-decoration-none" to={`movie/${movie.id}`}>
            {movie.title}
          </Link>
        </Card.Title>
        <Emoji movie={movie} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
