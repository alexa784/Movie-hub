import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import Text from "../components/Text";
import MovieAttributes from "../components/MovieAttributes";
import Trailer from "../components/Trailer";
import LongText from "../components/LongText";
import { Stack } from "react-bootstrap";

const MovieDetailsPage = () => {
  const params = useParams();
  const { movie, error, isLoading } = useMovie(parseInt(params.id!));

  const video = movie?.videos.results[0] ? movie?.videos.results[0] : null;

  if (error) throw error;
  if (!movie) return null;
  console.log(movie);
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
            <MovieAttributes movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
