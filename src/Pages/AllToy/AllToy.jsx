import React from "react";
import ShowToy from "./ShowToy";

const AllToy = () => {
  return (
    <>
      {/* <h1 className="text-3xl text-center my-8">
        Order Booking Information of {user?.displayName}
      </h1> */}

      <div className="overflow-x-auto">
        <table className="table w-full">
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
          <tbody>{<ShowToy></ShowToy>}</tbody>
        </table>
      </div>
    </>
  );
};

export default AllToy;
