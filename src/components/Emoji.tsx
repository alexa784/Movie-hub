import { Figure } from "react-bootstrap";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import getCorrespondingEmoji from "../services/getCorrespondingEmoji";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const Emoji = ({ movie }: Props) => {
  const emoji = getCorrespondingEmoji(movie.popularity);

  return (
    <Figure className="mb-1 ms-1" style={{ width: `${emoji?.width}px` }}>
      <Figure.Image src={emoji?.path}></Figure.Image>
    </Figure>
  );
};

export default Emoji;
