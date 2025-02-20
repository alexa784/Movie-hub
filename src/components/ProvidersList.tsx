import React from "react";
import useProviders from "../hooks/useProviders";
import Dropdown from "react-bootstrap/esm/Dropdown";

const ProvidersLists = () => {
  const { providers, error, isLoading } = useProviders();
  return (
    <Dropdown style={{ marginBottom: 5 }}>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {/*selectedPlatform ? selectedPlatform.name : "Platforms"*/ "Providers"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {providers?.map((p) => {
          return (
            <Dropdown.Item
              key={p.provider_id}
              onClick={() => {
                //setPlatformId(p.provider_id);
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
