import React, { useEffect, useState } from "react";
import ShowToy from "./ShowToy";

const AllToy = () => {
  const [allToy, setAllToy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [spinner, setSpinner] = useState(true);
  console.log(searchText);
  useEffect(() => {
    fetch("https://kids-toy-house-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        console.log(data);
        setSpinner(false);
      });
  }, []);
  const handleToSearch = () => {
    fetch(
      `https://kids-toy-house-server.vercel.app/searchByToyName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        console.log(data);
      });
  };
  return (
    <>
      {/* <h1 className="text-3xl text-center my-8">
        Order Booking Information of {user?.displayName}
      </h1> */}

      <div className="overflow-x-auto div my-16 p-12 bg-yellow-200 ">
        <div className="input-group w-full md:w-1/2 mx-auto mb-10">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleToSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {spinner ? (
          <button className="btn loading mx-auto block my-6">loading</button>
        ) : (
          <></>
        )}
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {allToy.map((toy, idx) => (
              <ShowToy key={idx} toy={toy} idx={idx}></ShowToy>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToy;
