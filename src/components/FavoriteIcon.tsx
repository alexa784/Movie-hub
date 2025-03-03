import { useState } from "react";
import { MdStarBorder } from "react-icons/md";

interface Props {
  isFavorite: boolean;
}

const FavoriteIcon = ({ isFavorite = false }: Props) => {
  const [favorite, setFavorite] = useState(isFavorite);
  return (
    <div>
      <MdStarBorder
        color={favorite ? "yellow" : "gray"}
        onClick={() => setFavorite(!favorite)}
      />
    </div>
  );
};

export default FavoriteIcon;
