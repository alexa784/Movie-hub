import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFavoriteMoviesStore from "../stores/favoriteMoviesStore";

const Notifications = () => {
  const { favorites } = useFavoriteMoviesStore();
  const [prevFavorites, setPrevFavorites] = useState(favorites);

  useEffect(() => {
    if (favorites.length < prevFavorites.length)
      toast.info("Removed from favorites! 🎬");
    if (prevFavorites.length < favorites.length)
      toast.success("Added to favorites! 🎬");
    setPrevFavorites(favorites);
  }, [favorites]);

  return (
    <ToastContainer
      theme="dark"
      hideProgressBar={true}
      position="top-center"
      autoClose={2 * 1000} // 2sec
    ></ToastContainer>
  );
};

export default Notifications;
