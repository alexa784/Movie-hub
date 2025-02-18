import React, { useState } from "react";
import { Stack, ToggleButton } from "react-bootstrap";

const ColorModeSwitch = () => {
  const [mode, setMode] = useState(false);
  const htmlElement = document.querySelector("html");
  htmlElement?.setAttribute("data-bs-theme", mode ? "light" : "dark");
  return (
    <Stack direction="horizontal">
      <ToggleButton
        id="mode_switch"
        value={""}
        checked={false}
        onClick={() => {
          setMode(!mode);
        }}
      ></ToggleButton>
      <div className="p-2 text-nowrap">{mode ? "Dark Mode" : "Light Mode"}</div>
    </Stack>
  );
};

export default ColorModeSwitch;
