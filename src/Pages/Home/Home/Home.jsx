import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Galary from "../Galary/Galary";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Galary></Galary>
      <Category></Category>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
