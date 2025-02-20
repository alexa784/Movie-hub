import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";
import Providers from "../components/ProvidersList";

const HomePage = () => {
  return (
    <>
      <div className="container ms-0 ps-0">
        <div className="row">
          <div className="col d-none d-lg-block">
            <GenreList />
          </div>
          <div className="col-sm-12 col-lg-10">
            <Providers />
            <MovieGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
