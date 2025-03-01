import { Movie } from "../hooks/useMovies";
import useProvidersByMovieId from "../hooks/useProvidersByMovieId";
import DefinitionItem from "./DefinitionItem";
import MovieScore from "./MovieScore";
import Text from "./Text";

interface Props {
  movie: Movie;
}

const MovieAttributes = ({ movie }: Props) => {
  const { providers, error, isLoading } = useProvidersByMovieId(movie.id);

  if (error) throw error;
  if (isLoading) return <h5>Loading movie attributes...</h5>;

  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-sm-2 ">
        <div className="col">
          <DefinitionItem name="Genres">
            {movie.genres.map((g) => (
              <Text text={g.name} key={g.id} />
            ))}
          </DefinitionItem>
        </div>
        <div className="col">
          <DefinitionItem name="Rate">
            <MovieScore score={movie.vote_average} />
          </DefinitionItem>
        </div>
        <div className="col">
          <DefinitionItem name="Providers">
            {providers?.map((p) => (
              <Text text={p.provider_name} key={p.provider_id} />
            ))}
          </DefinitionItem>
        </div>
        <div className="col">
          <DefinitionItem name="Publishers">
            {movie.production_companies.map((c) => (
              <Text text={c.name} key={c.id} />
            ))}
          </DefinitionItem>
        </div>
      </div>
    </div>
  );
};

export default MovieAttributes;
