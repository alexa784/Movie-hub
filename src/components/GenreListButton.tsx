import { Dropdown, Spinner } from "react-bootstrap";
import useGenres from "../hooks/useGenres";
import useQueryMovieStore from "../stores/movieQueryStores";
import useGenre from "../hooks/useGenre";
import ButtonSkeleton from "./ButtonSkeleton";

const GenreListButton = () => {
  const { genres, error, isLoading } = useGenres();
  const setGenreId = useQueryMovieStore((s) => s.setGenreId);
  const selectedGenreId = useQueryMovieStore((s) => s.queryMovies.genreId);
  const selectedGenre = useGenre(selectedGenreId);
  const defaultItem = (
    <Dropdown.Item key={-1} onClick={() => setGenreId(null)}>
      default
    </Dropdown.Item>
  );

  if (error) throw error;
  if (isLoading) return <ButtonSkeleton />;

  return (
    <Dropdown style={{ marginBottom: 5, paddingLeft: 11 }}>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {selectedGenre ? selectedGenre.name : "Genres"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {defaultItem}
        {genres?.map((g) => {
          return (
            <Dropdown.Item
              key={g.id}
              onClick={() => {
                setGenreId(g.id);
              }}
            >
              {g.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default GenreListButton;
