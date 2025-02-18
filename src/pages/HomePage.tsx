import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "./Layout";
import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";

const HomePage = () => {
  return (
    <>
      <div className="container ms-0 ps-0">
        <div className="row">
          <div className="col d-none d-lg-block">
            <GenreList />
          </div>
          <div className="col-sm-12 col-lg-10">
            <MovieGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
