import { Stack } from "react-bootstrap";
import GenreList from "../components/GenreList";
import GenreListButton from "../components/GenreListButton";
import MovieGrid from "../components/MovieGrid";
import Providers from "../components/ProvidersList";
import SortMoviesList from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <div className="container ms-0 ps-0">
        <div className="row">
          <div className="col d-none d-lg-block">
            <GenreList />
          </div>
          <div className="col-sm-12 col-lg-10">
            <Stack direction="horizontal" className="ms-1">
              <Providers />
              <GenreListButton />
              <SortMoviesList />
            </Stack>
            <MovieGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
