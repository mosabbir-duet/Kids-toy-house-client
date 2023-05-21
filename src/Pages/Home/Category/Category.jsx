import React, { useEffect, useState } from "react";
import ShowCategory from "./ShowCategory";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Marvel");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`https://kids-toy-house-server.vercel.app/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);
  return (
    <div className="my-12 p-8">
      <h1 className="md:text-5xl text-3xl text-center font-semibold text-[#ff0018] p-4 mb-8">
        Our Sub Category
      </h1>
      <div className="flex justify-center">
        <button
          onClick={() => handleTabClick("Marvel")}
          className={`btn ${
            activeTab == "Marvel" ? "btn-warning text-white" : ""
          }`}
        >
          Marvel
        </button>
        <button
          onClick={() => handleTabClick("Star Wars")}
          className={`btn ${
            activeTab == "Star Wars" ? "btn-warning text-white" : ""
          }`}
        >
          Star Wars
        </button>
        <button
          onClick={() => handleTabClick("Transformers")}
          className={`btn ${
            activeTab == "Transformers" ? "btn-warning text-white" : ""
          }`}
        >
          Transformers
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {toys.map((toy) => (
          <ShowCategory key={toy._id} toy={toy}></ShowCategory>
        ))}
      </div>
    </div>
  );
};

export default Category;
