import { Card, Placeholder } from "react-bootstrap";

const MovieCardSkeleton = () => {
  return (
    <Card className="m-2 mb-5">
      <div
        className="placeholder"
        style={{ width: "100%", height: "400px" }}
      ></div>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  );
};

export default MovieCardSkeleton;
