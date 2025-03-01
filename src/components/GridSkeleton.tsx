import MovieCardSkeleton from "./MovieCardSkeleton";

const GridSkeleton = () => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
      {skeletons.map((s) => (
        <MovieCardSkeleton key={s} />
      ))}
    </div>
  );
};

export default GridSkeleton;
