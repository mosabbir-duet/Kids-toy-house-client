import React from "react";
import img2 from "../../../assets/testimonial/images.png";
import img3 from "../../../assets/testimonial/img1.png";
import img1 from "../../../assets/testimonial/img3.png";
const Testimonial = () => {
  return (
    <div className="my-12 bg-base-200 p-12">
      <h1 className="md:text-5xl text-3xl text-center text-[#ff0018] font-medium p-4 mb-8">
        Our Respected Customer's Review
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Review:</h2>
            <p>
              Kid's toy house is an awesome sop..They provide best action toy
              which our baby liked so much.They give delivary on time. We
              satisfied to buy toy.. Best of luck for Kid's Toy House.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Review</h2>
            <p>
              Kid's toy house is an awesome sop..They provide best action toy
              which our baby liked so much.They give delivary on time. We
              satisfied to buy toy.. Best of luck for Kid's Toy House.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Review!</h2>
            <p>
              Kid's toy house is an awesome sop..They provide best action toy
              which our baby liked so much.They give delivary on time. We
              satisfied to buy toy.. Best of luck for Kid's Toy House.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
