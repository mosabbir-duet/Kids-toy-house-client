import React from "react";
import { Link } from "react-router-dom";

const ShowToy = ({ toy, idx }) => {
  //   console.log(toy, idx);
  const { sellerName, subCategory, toyName, toyPrice, quantity } = toy || {};
  return (
    <>
      <tr>
        <th>{idx + 1}</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{toyPrice}</td>
        <td>{quantity}</td>
        <td>
          <Link>
            <button className="btn btn-warning ">View Details</button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ShowToy;
