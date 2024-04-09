import React from "react";

function Section8() {
  return (
    <div>
      <section className="bg-white text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className=" text-black flex max-w-7xl mx-auto flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 flex flex-col ">
            <div>
              <h3 className="text-bold text-4xl leading-10 ">
                Case Study:Payout options help reassure sellers as they join
                Walmart's Marketplace
              </h3>

              <p className="text-xl mt-10">
                America's largest retailer partnered with Paypal to give its
                curated community of sellers the payout options they needed and
                grew their network by 130% in the process.
              </p>
              <p className=""></p>
              <p className="mt-10">Read the case study</p>
            </div>

            <hr className="mt-10"></hr>
            <div>
              {" "}
              <h3 className=" mt-10 text-bold text-4xl leading-10 ">
                Ebook : Every thing you need to know about payment processing solutions
              </h3>
              <p className="text-xl mt-10">
                Your customers expect a seamless and secure digital purchasing experiences. Learn how your business can provide it
              </p>
              <p className=""></p>
              <p className="mt-10">Read the  ebook </p>
            </div>
          </div>

          <hr className="rotate-90 text-black"></hr>
          <div className="md:w-1/2 md:mt-0  ">
            <img
              src={require("./Img/aero.jpg")}
              className="w-[500px] h-[500px] ml-12"
            />
            <div>
             
              <h3 className="text-bold text-4xl leading-10 ml-10 py-8 ">
                NEWS:United introduce QR codes in flight payment options
              </h3>
              <p className="text-xl ml-10 mt-10">New partnership enables United customers to buy snaks, drink, and other inflight purchases by using their PayPal app.</p>
              <p className=""></p>
              <p className="mt-10 ml-10 mb-10">Read the article</p>
            </div>
          </div>
        </div>

        <div className="p-10 bg-slate-100 rounded-md  flex max-w-7xl mx-auto flex-col md:flex-row items-center"><p className="text-black">Looking for an out-of-the-box commerce solutions? </p><p className="text-blue-700 ml-12">See how you can gets started today</p></div>
      </section>
    </div>
  );
}

export default Section8;
