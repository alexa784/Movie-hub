import React from "react";
import useProviders from "../hooks/useProviders";

const Providers = () => {
  const { providers, error, isLoading } = useProviders();
  return (
    <div>
      {providers?.map(
        (p) => p.display_priority <= 5 && <p>{p.provider_name}</p>
      )}
    </div>
  );
};

export default Providers;
