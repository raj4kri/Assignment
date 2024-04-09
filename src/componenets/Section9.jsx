import React from "react";

function Section9() {
  return (
    <div>
      <section className="bg-slate-100  py-16 px-4 sm:px-6 lg:px-8   ">
        <div className=" flex flew-col-reverse md:flew-row  gap-10 flex max-w-7xl mx-auto flex-col-reverse md:flex-row items-center ">
          <div className=" bg-white p-12 md:w-1/2">
            <div className="">
              <img
                src={require("./Img/img10.jpg")}
                className="w-[500px] h-[200px] "
              />
            </div>

            <h1 className="text-black text-3xl mt-9">Contacts our sales team</h1>
            <p className="mt-6 leading-">
              Learn how payments canbe leveraged as a calayst for growth.
            </p>
            <button className="bg-blue-600 rounded-3xl  p-2 mt-36 text-white text-sm">
              Contact Sales
            </button>
          </div>
          <div className=" bg-white p-12">
            <div className="">
              <img
                src={require("./Img/img10.jpg")}
                className="w-[500px] h-[200px] "
              />
            </div>

            <h1 className="text-black text-3xl mt-9">Explore developer documentation</h1>
            <p className="mt-6 leading-">
              See how our flesxible and interroperable technology helps to simplify intergration.
            </p>
            <button className="bg-blue-600 rounded-3xl  p-2 mt-36 text-white text-sm">
              Visit Developer Docs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section9;
