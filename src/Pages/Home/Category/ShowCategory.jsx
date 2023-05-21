import React from "react";
import { Link } from "react-router-dom";

const ShowCategory = ({ toy }) => {
  const { _id, toyImageUrl, toyName, toyPrice, ratings } = toy || {};
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={toyImageUrl} alt="Shoes" />
        </figure>
        <div className="card-body h-full">
          <div className="md:flex justify-between">
            <p className="text-md">
              <strong>Toy Name:</strong> {toyName}
            </p>
            <p className="text-md">
              <strong>Toy Price:</strong> $ {toyPrice}
            </p>
          </div>
          <div className="md:flex justify-between">
            <p className="text-md">
              <strong>Ratings:</strong> $ {ratings}
            </p>
            <Link to={`/toy/${_id}`}>
              <button className="btn btn-warning ">View Details</button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCategory;
