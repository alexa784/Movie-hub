import { useRef } from "react";
import useQueryMovieStore from "../stores/movieQueryStores";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchMovies = () => {
  const setSearchText = useQueryMovieStore((s) => s.setSearchText);
  const resetQuery = useQueryMovieStore((s) => s.resetQuery);
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          resetQuery();
          setSearchText(ref.current.value);

          navigate("/");
        }
      }}
      style={{ width: "90%" }}
    >
      <InputGroup className="">
        <Form.Control
          placeholder="Search movies"
          aria-label="Search movies"
          aria-describedby="basic-addon1"
          ref={ref}
        ></Form.Control>
      </InputGroup>
    </form>
  );
};

export default SearchMovies;
