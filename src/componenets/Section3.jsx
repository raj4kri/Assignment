import React from "react";

function Section3() {
  return (
    <div>
      <section className="relative bg-white-900   text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center ">
            <p className="text-5xl  text-black mb-">
             Our  connections ,innovative, and intelligence make PayPal your strategic partener
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-36 mt-36  justify-center items-center">
            {/* Image 1 */}
            <div>
              <img src={require("./Img/img4.jpg")} alt="Image 1" className="ml-6" />
              <h3 className="text-2xl font-semibold mt-4 text-black items-center ml">
                Connected
              </h3>
              <p className="text-base mt-2 text-black ">
              PayPal is a single point of entry to payment expertise tools technology and data that can help you compare and win
                
              </p>
            </div>

            {/* Image 2 */}
            <div>
              <img src={require("./Img/img5.jpg")} alt="Image 2" className="ml-6" />
              <h3 className="text-2xl font-semibold mt-4 text-black ml-0">
                Innovative
              </h3>
              <p className="text-base mt-2 text-black">
              Stay agile ahead of trends and help safeguard against economic uncertainty with modular solution that are easy to operationalize.
              </p>
            </div>

            {/* Image 3 */}
            <div>
              <img src={require("./Img/img6.jpg")} alt="Image 3" className="ml-6" />
              <h3 className="text-2xl font-semibold mt-4  text-black ">
                Intelligent
              </h3>
              <p className="text-base mt-2 text-black">
              with one of the world largest data sets will help you understand customer behaviour, detect fraud, and capture more designing across the channel device, and Markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section3;
