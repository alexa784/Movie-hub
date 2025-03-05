import InfiniteScroll from "react-infinite-scroll-component";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import GridSkeleton from "./GridSkeleton";

const MovieGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useMovies();
  if (error) throw new Error("Server ne salje podatke!");

  let totalFetchedMovies = 0;
  if (data && data.pages && data.pages[0]) {
    totalFetchedMovies = data.pages[0].results.length * data.pages.length;

    if (totalFetchedMovies === 0)
      return (
        <p style={{ textAlign: "center" }}>
          <b>No movies listed.</b>
        </p>
      );
  }
  return (
    <>
      <div className="container">
        {data && (
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            dataLength={totalFetchedMovies} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<MovieCardSkeleton />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
              {data?.pages.map((p) =>
                p.results.map((m) => (
                  <div className="col" key={m.id}>
                    <MovieCard movie={m} />
                  </div>
                ))
              )}
            </div>
          </InfiniteScroll>
        )}
        {isLoading && <GridSkeleton />}
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
