import React from "react";

function Section4() {
  return (
    <div>
      <section className="relatiive  text-white py-16 md:py-20 lg:py-24 ">
        <div className=" bg-gray-800  ">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
            {/* Image on left side */}
            <div className=" md:w-1/2  overflow-y-visible  justify-center items-center max-h-[550px]">
              <img
                src={require("./Img/img7.jpg")}
                alt="Image"
                className=" w-full h-full overflow-visible mt-10"
              />
            </div>

            {/* Text content on right side */}
            <div className="md:w-1/2 md:pl-10 mt-2 md:mt-0 text-white">
              <h2 className="text-4xl font-bold leading-tight ml-18 mb-2 p-8">
                Harness our powerfull plateform
              </h2>
              <p className="text-lg mb-4 p-8">
                Accelerate growth and easily scale with our flexible feature and
                tools that can be customized foe your exact use cases.
              </p>
              <p className="text-base text-blue p-10">
                Learn abbout our plateform
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
          {/* Left Side - Content */}
          <div className="">
            <div className="md:w-1/2 md:pr-8 p-14">
              <h2 className="text-3xl font-bold -mt-12 text-black ">
                Leverage our dedicated customer network
              </h2>
              <p className="text-lg mb-4 text-black">
                our global network of 400+ million active accounts buys more and
                buys more often with PayPal.
              </p>
              <p className="text-black ">learn about our extensive network</p>
            </div>
          </div>

          {/* Right Side - Image */}

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={require("./Img/img7.jpg")} className="w-full h-full " />
            <img
              src={require("./Img/img9.jpg")}
              className="md:w-1/2 w-64 h-64  -my-36 -mx-24 mb-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section4;
