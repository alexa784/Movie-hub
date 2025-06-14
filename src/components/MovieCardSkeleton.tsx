import { Card, Placeholder, Stack } from "react-bootstrap";

const MovieCardSkeleton = () => {
  return (
    <Card className="m-2 mb-3" style={{ overflow: "hidden", width: "15em" }}>
      <div
        className="placeholder"
        style={{ width: "300px", height: "200px" }}
      ></div>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Stack direction="horizontal" className="justify-content-between">
            <Placeholder xs={7} /> <Placeholder xs={2} />
          </Stack>
        </Placeholder>
        <Placeholder.Button variant="primary" xs={8} />
      </Card.Body>
    </Card>
  );
};

export default MovieCardSkeleton;
