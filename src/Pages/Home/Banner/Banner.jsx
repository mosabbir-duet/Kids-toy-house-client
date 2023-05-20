import Lottie from "lottie-react";
import React from "react";
import banner from "../../../assets/66214-thor-vs-captain-america.json";
const Banner = () => {
  return (
    <div className="bg-yellow-300 my-16">
      <div className="hero p-12 md:px-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <Lottie
              style={{
                borderRadius: "25px",
              }}
              animationData={banner}
              loop={true}
            ></Lottie>
          </div>
          <div className="lg:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold text-[#ff0018]">
              Premium Toys <br /> for Kid's
            </h1>
            <p className="py-6 text-xl">
              The best toys are the ones that make your kids feel like they are
              getting the real deal. <br />
              You can get all type of action toy such as Iron man, Hulk, Black
              Panther, etc for you kids in our{" "}
              <span className="text-[#ff0018]">Kids Toy House</span> <br />
              Let's meet our Super hero...
            </p>
            <button className="btn glass bg-[#ff0018] hover:rounded-3xl hover:bg-red-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
