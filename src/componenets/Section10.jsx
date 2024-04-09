import React from "react";

function Section10() {
  return (
    <div>
      <section className="bg-white-100 py-16 px-4 sm:px-6 lg:px-8 md:flex-row items-center">
        <div>
          <p className="ml-8 text-md">
            Nielsen Study, Commissioned By payPal, july 2020 of 15,144 US
            consumers to understand and measure the impact that PayPal has for
            US-based large enterprise merchants across differents verticals.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col p-8">
            <h4 className="font-bold text-blue-600">
              {" "}
              Small-to-Medium Business
            </h4>
            <hr className="text-black"></hr>

            <div className="flex flex-row">
              <div className="flex gap-24 mt-8 ">
                <div className="font-bold">
                  <p> Introduction </p>
                  <p> Getting Started</p>
                </div>
                <div>
                  <h3 className="font-bold ">All Solution </h3>
                  <p>Accepte Pythonayments</p>
                  <p>Make Payments</p>
                  <p>Manage Risk</p>
                  <p>Accelerate Growth</p>
                  <p>Streamline Operations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-8">
            <h4 className="font-bold text-blue-600 "> Enterprice</h4>
            <hr className="text-black"></hr>

            <div className="flex flex-row">
              <div className="flex mt-8 gap-24">
                <div className="font-bold">
                  <p> Introduction </p>
                  <p> Marketplaces & Partners </p>
                </div>
                <div>
                  <h3 className="font-bold">Platform & Solutions </h3>
                  <p>Accepte Pythona</p>
                  <p>Make Payments</p>
                  <p>Manage Risk</p>
                  <p>Accelerate Growth</p>
                  <p>Streamline Operations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-8">
            <h4 className="font-bold text-blue-600 "> More</h4>
            <hr className="text-black"></hr>

            <div className="flex flex-row">
              <div className="flex mt-8 gap-24">
                <div className="font-bold ">
                  <p> Nonprofits</p>
                  <p> Pricing</p>
                  <p>Resource Centers</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-s ">
          <div>
            <img src={require("./Img/paypal.jpg")}></img>
            <div className="flex text-xs md:text-sm gap-1 font-bold text-blue-900 p-2  md:gap-4">
              <p> Help</p>
              <p>Contact</p>
              <p>Fess </p>
              <p> Security</p>
              <p> Apps</p>
              <p>Shops</p>
              <p>Enterprise</p>
              <p>Partners</p>
              <p>Feedback</p>
            </div>
            <hr></hr>
            <div className=" flex font-bold text-blue-900 p-2">
              <div className="flex flex-col md:flex-row ">
                <div className="flex   text-xs md:text-sm gap-1 md:gap-4">
                  <p> About</p>
                  <p>Newsroom</p>
                  <p>Jobs</p>
                  <p>Invester Relations</p>
                  <p>Values in Action</p>
                  <p>Public Policy</p>
                  <p>Sitemap </p>
                </div>
                <div className="flex float-right text-xs md:text-sm gap-4 ml-0 md:ml-[280px]">
                  <div>
                    
                    <span className="text-xs text-gray-500">© 1990-2022</span>
                  </div>
                  <p>Accessiblility</p>
                  <p>Privacy</p>
                  <p>Cookies</p>
                  <p className="float-end">Legal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section10;
