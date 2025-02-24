import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  if (error) throw new Error("Server ne salje podatke!");

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
          {data?.results.map((m) => (
            <div className="col" key={m.id}>
              <MovieCard movie={m} />
            </div>
          ))}
          {isLoading && skeletons.map((s) => <MovieCardSkeleton />)}
        </div>
      </div>
      <button
        className="btn btn-primary position-fixed bottom-0 end-0 m-3"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆ Scroll to Top
      </button>
    </>
  );
};
export default MovieGrid;
