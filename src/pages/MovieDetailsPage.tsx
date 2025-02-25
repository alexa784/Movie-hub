import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

const MovieDetailsPage = () => {
  const params = useParams();
  const { movie, error, isLoading } = useMovie(parseInt(params.id));

  if (error) throw error;
  if (!movie) return null;

  console.log(movie);
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie?.videos.results[0].site}</p>
    </div>
  );
};

export default MovieDetailsPage;
