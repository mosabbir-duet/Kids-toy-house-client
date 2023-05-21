import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Galary from "../Galary/Galary";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Galary></Galary>
      <Category></Category>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
};

export default Home;
