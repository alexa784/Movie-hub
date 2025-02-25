import { Button } from "react-bootstrap";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useMovies();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  if (error) throw new Error("Server ne salje podatke!");

  let totalFetchedMovies = 0;
  if (data && data.pages && data.pages[0]) {
    totalFetchedMovies = data.pages[0].results.length * data.pages.length;
  }
  console.log(`totalFetchedMovies= ${totalFetchedMovies}`);
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
          {data && (
            <InfiniteScroll
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
              {data?.pages.map((p) =>
                p.results.map((m) => (
                  <div className="col" key={m.id}>
                    <MovieCard movie={m} />
                  </div>
                ))
              )}
            </InfiniteScroll>
          )}
          {isLoading &&
            skeletons.map((s, index) => <MovieCardSkeleton key={index} />)}
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

// OK
/**const MovieGrid = () => {
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
          {isLoading &&
            skeletons.map((s, index) => <MovieCardSkeleton key={index} />)}
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
}; */
