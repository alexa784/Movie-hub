import { MdStarBorder } from "react-icons/md";
import useFavoriteMoviesStore from "../stores/favoriteMoviesStore";

interface Props {
  isFavorite?: boolean;
  movieId: number;
}

const FavoriteIcon = ({ movieId }: Props) => {
  const { favorites, setFavorites } = useFavoriteMoviesStore();
  const isFavorite = favorites.includes(movieId);

  return (
    <div>
      <MdStarBorder
        color={isFavorite ? "yellow" : "gray"}
        onClick={() => {
          isFavorite
            ? setFavorites(favorites.filter((id) => id !== movieId))
            : setFavorites([...favorites, movieId]);
        }}
      />
    </div>
  );
};

export default FavoriteIcon;
