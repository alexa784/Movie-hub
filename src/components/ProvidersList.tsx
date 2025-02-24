import { Spinner } from "react-bootstrap";
import Dropdown from "react-bootstrap/esm/Dropdown";
import useProvider from "../hooks/useProvider";
import useProviders from "../hooks/useProviders";
import useQueryMovieStore from "../stores/movieQueryStores";

const ProvidersLists = () => {
  const { providers, error, isLoading } = useProviders();
  const selectedProviderId = useQueryMovieStore(
    (s) => s.queryMovies.providerId
  );
  const setProviderId = useQueryMovieStore((s) => s.setProviderId);
  const selectedProvider = useProvider(selectedProviderId);
  const defaultItem = (
    <Dropdown.Item key={-1} onClick={() => setProviderId(null)}>
      default
    </Dropdown.Item>
  );
  const FirstTenproviders = providers?.slice(0, 20);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <Dropdown style={{ marginBottom: 5, paddingLeft: 11 }}>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {selectedProvider ? selectedProvider.provider_name : "Providers"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {defaultItem}
        {FirstTenproviders?.map((p) => {
          return (
            <Dropdown.Item
              key={p.provider_id}
              onClick={() => {
                setProviderId(p.provider_id);
              }}
            >
              {p.provider_name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProvidersLists;
