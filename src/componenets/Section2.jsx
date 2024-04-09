import React from "react";

const Section2 = () => {
  return (
    <section className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center"></div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="lg:w-1/2 lg:mr-8 mb-4 lg:mb-0">
            <p className="text-5xl leading-100 mt-36 mb-36    text-black-100">
              PayPal is trusted by businesses and customer around the globe
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 mt-8 ml-12 ">
            <div className="grid grid-cols-subgrid gap-4 col-span-2">
              <div class="col-start-2">
                {" "}
                <button className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-lg  font-medium rounded-t-lg text-black bg-white-100 hover:bg-blue-100 focus:outline-none focus:shadow-outline           shadow-[-1px_-14px_26px_6px_#cbd5e0]
">
                  PayPal Assistant
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl leading-6 font-bold mb-2 text-green-600">
                400+
              </h3>
              <p className="text-base leading-6">Millions of active users</p>
            </div>
            <div className=" mt-4">
              <h3 className="text-3xl leading-6 font-bold mb-2  text-green-600">
                200+
              </h3>
              <p className="text-base leading-6">markets around the globe</p>
            </div>

            <div className="mt-4">
              <h3 className="text-3xl leading-6 font-bold mb-2  text-green-600">
                20+
              </h3>
              <p className="text-base leading-6">years of experience</p>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl leading-6 font-bold mb-2  text-green-600">
                30+
              </h3>
              <p className="text-base leading-6">Millions of merchants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
