import Lottie from "lottie-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import showError from "../../assets/90344-spider-404.json";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className=" mb-8 md:mx-auto md:w-2/3">
      <div>
        <Lottie
          animationData={showError}
          // height={400}
          // width={400}
          loop={true}
        ></Lottie>
      </div>
      <div className=" text-center">
        <p className="text-2xl font-semibold md:text-3xl mb-8">
          {error?.message}
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-yellow-200 text-gray text-xl"
        >
          Back to homepage
        </Link>
      </div>

      {/* <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          
          <div className="max-w-md text-center">
            
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-violet-200 text-gray text-xl"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ErrorPage;
