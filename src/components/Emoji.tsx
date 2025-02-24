import { Figure } from "react-bootstrap";
import getCorrespondingEmoji from "../services/getCorrespondingEmoji";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const Emoji = ({ movie }: Props) => {
  const emoji = getCorrespondingEmoji(movie.popularity);

  return (
    <Figure className="mb-0 mt-1" style={{ width: `${emoji?.width}px` }}>
      <Figure.Image className={"mb-1"} src={emoji?.path}></Figure.Image>
    </Figure>
  );
};

export default Emoji;
