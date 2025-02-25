import React, { ReactComponentElement } from "react";
import { PlaceholderButton, Spinner } from "react-bootstrap";

const ButtonSkeleton = () => {
  return (
    <button type="button" className="btn btn-outline-secondary ms-1 me-2 mb-1">
      {"Loading..."}
    </button>
  );
};

export default ButtonSkeleton;
