import GenreList from "../components/GenreList";
import GroupSelectors from "../components/GroupSelectors";
import MovieGrid from "../components/MovieGrid";
import Title from "../components/Title";

const HomePage = () => {
  return (
    <>
      <div className="container ms-0 ps-0">
        <div className="row">
          <div className="col d-none d-lg-block">
            <GenreList />
          </div>
          <div className="col-sm-12 col-lg-10">
            <Title />
            <GroupSelectors />
            <MovieGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
