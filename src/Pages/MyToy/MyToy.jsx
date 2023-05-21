import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ViewToy from "./ViewToy";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToyInfo, setMyToyInfo] = useState([]);
  //   console.log(user?.email);
  useEffect(() => {
    fetch(
      `https://kids-toy-house-server.vercel.app/mytoys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToyInfo(data);
      });
  }, [user]);
  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl font-medium text-[#ff0018] my-12">
        Information about your Toy which added
      </h1>
      <table className="table w-full ">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Toy Image</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {myToyInfo.map((toy, idx) => (
            <ViewToy
              key={idx}
              toy={toy}
              idx={idx}
              myToyInfo={myToyInfo}
              setMyToyInfo={setMyToyInfo}
            ></ViewToy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
