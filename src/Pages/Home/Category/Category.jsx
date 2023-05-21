import React, { useEffect, useState } from "react";

const Category = () => {
  // const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`https://kids-toy-house-server.vercel.app/${activeTab}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [activeTab]);
  return (
    <div>
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
    </div>
  );
};

export default Category;
