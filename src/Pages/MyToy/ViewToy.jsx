import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewToy = ({ toy, idx, myToyInfo, setMyToyInfo }) => {
  const {
    _id,
    toyImageUrl,
    subCategory,
    toyName,
    toyPrice,
    quantity,
    message,
  } = toy || {};

  // for update
  const handleToUpdate = (id) => {
    fetch(`https://kids-toy-house-server.vercel.app/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          const remaining = myToyInfo.filter((toy) => toy._id !== id);
          setMyToyInfo(remaining);
          Swal.fire(
            "Update!",
            "Your toy information updated successfully.",
            "success"
          );
        }
      });
  };

  //   for delete Operation
  const handleToDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://kids-toy-house-server.vercel.app/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = myToyInfo.filter((toy) => toy._id !== id);
              setMyToyInfo(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        //
      }
    });
  };
  return (
    <>
      <tr>
        <th>{idx + 1}</th>
        <td>
          <img
            className="h-24 w-24 p-2 bg-yellow-300 rounded-xl"
            src={toyImageUrl}
            alt="Avatar Tailwind CSS Component"
          />
        </td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{toyPrice}</td>
        <td>{quantity}</td>
        <td>{message}</td>
        <td>
          <Link to={`/updateToy/${_id}`}>
            <button className="btn btn-warning btn-outline mr-2 ">Edit</button>
            <button
              onClick={() => handleToDelete(_id)}
              className="btn btn-warning bg-[#ff0018]"
            >
              Delete
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ViewToy;
