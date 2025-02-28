import useGenre from "../hooks/useGenre";
import useQueryMovieStore from "../stores/movieQueryStores";

const Title = () => {
  const selectedGenreId = useQueryMovieStore((s) => s.queryMovies.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  return (
    <h1 className="ms-3 mb-3">
      {(selectedGenre ? selectedGenre.name + " " : "") + "Movies"}
    </h1>
  );
};

export default Title;
