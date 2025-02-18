import React from "react";
import useGenres from "../hooks/useGenres";
import { Stack } from "react-bootstrap";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <Stack direction="vertical">
      {genres?.map((g) => (
        <p key={g.id}>{g.name}</p>
      ))}
    </Stack>
  );
};

export default GenreList;
