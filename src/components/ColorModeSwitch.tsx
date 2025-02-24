import { useState } from "react";
import { Button } from "react-bootstrap";

const ColorModeSwitch = () => {
  const [mode, setMode] = useState(false); // default is dark
  const htmlElement = document.querySelector("html");
  htmlElement?.setAttribute("data-bs-theme", mode ? "light" : "dark");
  return (
    <Button
      className="me-1"
      variant={mode ? "secondary" : "light"}
      onClick={() => {
        setMode(!mode);
      }}
    >
      {mode ? "Dark" : "Light"}
    </Button>
  );
};

export default ColorModeSwitch;
