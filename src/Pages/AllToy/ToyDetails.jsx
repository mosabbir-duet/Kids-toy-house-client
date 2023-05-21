import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";

Aos.init();
const ToyDetails = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState([]);
  //   console.log(id);
  const {
    _id,
    sellerName,
    subCategory,
    toyName,
    toyPrice,
    quantity,
    toyImageUrl,
    message,
    sellerEmail,
    ratings,
  } = toyDetails || {};
  useEffect(() => {
    fetch(`https://kids-toy-house-server.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToyDetails(data);
      });
  }, []);
  console.log(toyDetails);
  return (
    <div className="my-12">
      <h1 className="text-3xl md:text-5xl font-semibold text-[#ff0018] text-center pb-10">
        Details Information of {toyDetails.toyName}
      </h1>
      <div className="card max-w-2xl glass mx-auto">
        <figure className=" bg-yellow-300 ">
          <LazyLoadImage
            src={toyImageUrl}
            className=" rounded-xl hover:opacity-90 hover:scale-110 duration-500 p-8"
            alt={toyName}
          />
        </figure>
        <div
          className="card-body space-y-3"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h2 className="text-2xl md:text-3xl text-[#ff0018] font-semibold text-center">
            {toyName}
          </h2>

          <div className="md:flex justify-between">
            <p className="text-md">
              <strong>Seller Name:</strong> {sellerName}
            </p>
            <p className="text-md">
              <strong>Seller Email:</strong> {sellerEmail}
            </p>
          </div>
          <div className="md:flex justify-between">
            <p className="text-md">
              <strong>Sub Category:</strong> {subCategory}
            </p>
            <p className="text-md">
              <strong>Ratings:</strong> {ratings}
            </p>
          </div>
          <div className="md:flex justify-between">
            <p className="text-md">
              <strong>Toy Price:</strong> $ {toyPrice}
            </p>
            <p className="text-md">
              <strong>Quantity:</strong> {quantity}
            </p>
          </div>
          <div>
            <p className="text-md">
              <strong>Description:</strong> {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
