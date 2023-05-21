import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto bg-yellow-200 my-12 py-8">
        <div className="pb-4 ">
          <h2 className="text-5xl text-center font-semibold   ">
            Send Mail To Our{" "}
            <span className="text-[#ff0018]">Kid's Toy House</span>
          </h2>
          <p className="text-center py-2">
            Send your advice or any others thought about our Kid's Toy House
          </p>
        </div>
        <form className="w-1/2 mx-auto">
          <div className="form-control">
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered w-full pr-16"
            />
          </div>
          <div className="form-control my-4">
            <input
              type="text"
              placeholder="your email"
              className="input input-bordered w-full pr-16"
            />
          </div>
          <textarea rows="5" cols="100"></textarea>
          <button className="btn btn-warning block mx-auto">Send mail</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
