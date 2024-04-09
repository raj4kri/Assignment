import React from "react";

const Section = () => {
  return (
    <>
      <section className="relative bg-blue-800  text-white py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Left Content */}
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          {/* Text Content */}
          <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8">
              Capture the full potential of commerce
            </h2>
            <p className="text-lg md:text-xl mb-6">
              PayPal helps businesses find active buyers, increase conversion
              across channels, and scale into new markets.
            </p>

            <button className="bold bg-white rounded-full text-blue-900 py-2.5 px-5  text-sm md:text-xl hover:bg-blue-100 transition duration-300 ease-in-out font-bold">
              Contat Sales
            </button>
          </div>

          {/* Images */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={require("./Img/img7.jpg")} className="w-full h-full " />
            <img
              src={require("./Img/mobi.jpg")}
              className="md:w-1/2 w-36 h-96 rounded-lg  -my-36 -mx-24 mb-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
