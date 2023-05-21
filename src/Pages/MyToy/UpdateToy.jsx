import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const toy = useLoaderData();
  //   console.log(toy);
  const {
    _id,
    sellerName,
    subCategory,
    toyName,
    toyPrice,
    quantity,
    toyImageUrl,
    message,
    sellerEmail,
    ratings,
  } = toy || {};

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch(`https://kids-toy-house-server.vercel.app/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Wow!!!",
            text: "Toy Updated successfully...",
          });
        }
      })
      .catch((error) => console.log(error.message));
    reset();
  };
  return (
    <div className="my-12">
      <div className="w-2/3 mx-auto border border-orange-500 p-12 rounded-xl">
        <h1 className="text-3xl font-medium text-orange-500 mb-8 p-4 text-center border-b-2 border-warning ">
          Update Toy Information
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Seller Name */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-xl">Seller Name</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Your name"
                defaultValue={user?.displayName}
                type="text"
                {...register("sellerName", {
                  required: "Field Value required.",
                })}
              />
              {errors.sellerName && (
                <p className="text-warning">Field Value required.</p>
              )}
            </div>
            {/* Seller Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Seller Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                defaultValue={user?.email}
                className="input input-bordered"
                {...register("sellerEmail", {
                  required: "Field Value required.",
                })}
              />
              {errors.sellerEmail && (
                <p className="text-warning">Field Value required.</p>
              )}
            </div>
            {/* Sub Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Sub Category</span>
              </label>
              <select
                {...register("subCategory", {
                  required: "Field value required.",
                })}
                className="input input-bordered"
              >
                {" "}
                <option value="Marvel">Marvel</option>
                <option value="Star Wars">Star Wars</option>
                <option value="Transformers">Transformers</option>
              </select>
            </div>
            {/* Toy Name */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-xl">Toy Name</span>
              </label>
              <input
                className="input input-bordered"
                defaultValue={toyName}
                placeholder="Toy name"
                type="text"
                {...register("toyName", {
                  required: "Field value required.",
                })}
              />
              {errors.toyName && (
                <p className="text-warning">Field Value required.</p>
              )}
            </div>
            {/* Toy Image Url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Toy Image Url</span>
              </label>
              <input
                type="url"
                placeholder="Toy image url"
                defaultValue={toyImageUrl}
                className="input input-bordered"
                {...register("toyImageUrl", {
                  required: "Field value required.",
                })}
              />
              {errors.toyImageUrl && (
                <p className="text-warning">Field Value required.</p>
              )}
            </div>
            {/* Toy Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Toy Price</span>
              </label>
              <input
                type="text"
                placeholder="Toy price"
                defaultValue={toyPrice}
                className="input input-bordered"
                {...register("toyPrice", { required: "Field value required." })}
              />
              {errors.toyPrice && (
                <p className="text-warning">Field Value required.</p>
              )}
            </div>
            {/* Ratings */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Ratings</span>
              </label>
              <input
                type="numbers"
                placeholder="Toy ratings"
                defaultValue={ratings}
                className="input input-bordered"
                {...register(
                  "ratings",
                  { min: 1, max: 5 },
                  { required: "Field value required." }
                )}
              />
              {errors.ratings && (
                <p className="text-warning">
                  Please Choose ratings from 1 to 5.
                </p>
              )}
            </div>
            {/* Available Quantity*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Available Quantity</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={quantity}
                {...register("quantity", { required: "Field value required." })}
              />
              {errors.quantity && (
                <p className="text-warning">Field Value required.</p>
              )}
            </div>
          </div>
          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Description</span>
            </label>
            <textarea
              rows="15"
              type="text"
              defaultValue={message}
              className="input input-bordered"
              {...register("message")}
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-warning text-white px-8">
              Update Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
