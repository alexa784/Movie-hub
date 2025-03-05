import { Stack } from "react-bootstrap";
import useSortParam from "../hooks/useSortParam";
import useSortParams from "../hooks/useSortParams";
import useQueryMovieStore from "../stores/movieQueryStores";

const SortSelectorMobile = () => {
  const sortParamsList = useSortParams();
  const setSearchParam = useQueryMovieStore((s) => s.setSearchParam);
  const paramApi = useQueryMovieStore((s) => s.queryMovies.searchParam);
  const previousSelectedParam = useSortParam(paramApi);

  return (
    <Stack
      direction="horizontal"
      gap={1}
      className="ms-2"
      style={{ maxWidth: "100%", overflowX: "auto", paddingBottom: "5px" }}
    >
      {sortParamsList.map((p, index) => {
        return (
          <button
            style={{ whiteSpace: "nowrap" }}
            className={`btn btn-outline-primary btn-sm rounded-lg ${
              previousSelectedParam?.name === p.name ? "active" : null
            }`}
            key={index}
            onClick={() => setSearchParam(p.apiParam)}
          >
            {p.name}
          </button>
        );
      })}
    </Stack>
  );
};

export default SortSelectorMobile;
