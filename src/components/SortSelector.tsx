import { Dropdown } from "react-bootstrap";
import useSortParams from "../hooks/useSortParams";
import useQueryMovieStore from "../stores/movieQueryStores";
import useSortParam from "../hooks/useSortParam";

const SortSelector = () => {
  const sortParamsList = useSortParams();
  const setSearchParam = useQueryMovieStore((s) => s.setSearchParam);
  const paramApi = useQueryMovieStore((s) => s.queryMovies.searchParam);
  const previousSelectedParam = useSortParam(paramApi);

  const defaultItem = (
    <Dropdown.Item key={-1} onClick={() => setSearchParam(null)}>
      Relevance
    </Dropdown.Item>
  );

  return (
    <Dropdown style={{ marginBottom: 5, paddingLeft: 11 }}>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {"Sort by "}
        {previousSelectedParam ? previousSelectedParam.name : "Relevance"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {defaultItem}
        {sortParamsList.map((p, index) => {
          return (
            <Dropdown.Item
              key={index}
              onClick={() => {
                setSearchParam(p.apiParam);
              }}
            >
              {p.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortSelector;
