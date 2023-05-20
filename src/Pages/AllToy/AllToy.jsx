import React, { useEffect, useState } from "react";
import ShowToy from "./ShowToy";

const AllToy = () => {
  const [allToy, setAllToy] = useState([]);
  useEffect(() => {
    fetch("https://kids-toy-house-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      {/* <h1 className="text-3xl text-center my-8">
        Order Booking Information of {user?.displayName}
      </h1> */}

      <div className="overflow-x-auto div my-16 p-12 bg-yellow-200">
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
