import { MdStarBorder } from "react-icons/md";
import useFavoriteMoviesStore from "../stores/favoriteMoviesStore";

interface Props {
  movieId: number;
  style?: React.CSSProperties;
}

const FavoriteIcon = ({ movieId, style }: Props) => {
  const { favorites, setFavorites } = useFavoriteMoviesStore();
  const isFavorite = favorites.includes(movieId);

  return (
    <MdStarBorder
      color={isFavorite ? "yellow" : "gray"}
      style={style}
      onClick={() => {
        isFavorite
          ? setFavorites(favorites.filter((id) => id !== movieId))
          : setFavorites([...favorites, movieId]);
      }}
    />
  );
};

export default FavoriteIcon;
