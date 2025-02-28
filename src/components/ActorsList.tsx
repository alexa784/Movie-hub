import { useState } from "react";
import { Movie } from "../hooks/useMovies";
import DefinitionItem from "./DefinitionItem";

interface Props {
  movie: Movie;
}

const ActorsList = ({ movie }: Props) => {
  const [limit, setLimit] = useState(5);

  const maxLimit = movie.credits.cast.length;
  const whitespace = " ";
  const elements = movie.credits.cast
    .map((a) => (
      <p className="mb-0 ms-1" key={a.id}>
        {a.name + whitespace}
        <em>as</em>
        {whitespace + a.character}
      </p>
    ))
    .slice(0, limit);
  return (
    <div className="mb-3 ms-2">
      <DefinitionItem name="Actors">
        {elements}
        {limit < maxLimit ? (
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setLimit(limit + 5)}
          >
            More
          </button>
        ) : null}
      </DefinitionItem>
    </div>
  );
};

export default ActorsList;
