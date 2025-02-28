import { Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ActorsList from "../components/ActorsList";
import LongText from "../components/LongText";
import MovieAttributes from "../components/MovieAttributes";
import Trailer from "../components/Trailer";
import useMovie from "../hooks/useMovie";

const MovieDetailsPage = () => {
  const params = useParams();
  const { movie, error, isLoading } = useMovie(parseInt(params.id!));

  if (isLoading) return "Loading page...";

  const video = movie?.videos.results[0] ? movie?.videos.results[0] : null;

  if (error) throw error;
  if (!movie) return null;

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2">
          <div className="col">
            <Stack direction="vertical" gap={2}>
              <h1>{movie.title}</h1>
              <LongText text={movie.overview} />
              <Trailer platfromKey={video?.key} site={video?.site} />
            </Stack>
          </div>
          <div className="col">
            <ActorsList movie={movie} />
            <MovieAttributes movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
