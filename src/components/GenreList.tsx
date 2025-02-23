import { Stack } from "react-bootstrap";
import useGenres from "../hooks/useGenres";
import useQueryMovieStore from "../stores/movieQueryStores";

const GenreList = () => {
  const { genres } = useGenres();
  const { setGenreId } = useQueryMovieStore();
  return (
    <Stack direction="vertical">
      {genres?.map((g) => (
        <a
          key={g.id}
          href="#"
          className="text-decoration-none"
          onClick={() => {
            setGenreId(g.id);
          }}
        >
          {g.name}
        </a>
      ))}
    </Stack>
  );
};

export default GenreList;
