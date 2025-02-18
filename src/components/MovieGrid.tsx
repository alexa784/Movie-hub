import React from "react";

const dummy = [0, 1, 2, 3, 4, 5, 6, 7];

const MovieGrid = () => {
  return (
    <div className="container">
      <div className="row row-cols-sm-1 row-cols-lg-2 row-cols-xl-3">
        {dummy.map((v) => (
          <div className="col" key={v}>
            {v}
          </div>
        ))}
      </div>
    </div>
  );
};
/**Vidjeti na bootstrap 5 gridu kako ovo funkcionise*/
export default MovieGrid;
