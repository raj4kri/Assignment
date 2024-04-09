import React from "react";

function Section6() {
  return (
    <div>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl text-balance p-14 mb-6 text-center">We help drive growth for some of the world's most forward-looking brands</h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-10 ml-24">
          {/* Column 1 */}
          <div >
            <ul >
              <li>
              <img
              src={require("./Img/logo1.jpg")}
              alt=""
              className="p-2"
            />
              </li>
              <li>
              <img
              src={require("./Img/logo2.jpg")}
              alt=""
              className="p-2"
            />
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <ul>
              <li>
              <img
              src={require("./Img/logo3.jpg")}
              alt=""
              className="p-2"
            />
              </li>
              <li>
              <img
              src={require("./Img/logo4.jpg")}
              alt=""
              className="p-2"
            />
              </li>
              <li>
              <img
              src={require("./Img/logo5.jpg")}
              alt=""
              className="p-2"
            />
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <ul>
              <li>
              <img
              src={require("./Img/logo6.jpg")}
              alt=""
              className="p-2"
            />
              </li>
              <li>
              <img
              src={require("./Img/logo7.jpg")}
              alt=""
              className="p-2"
            />
              </li>
              <li>
              <img
              src={require("./Img/logo8.jpg")}
              alt=""
              className="p-2"
            />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              {" "}
              <li>
              <img
              src={require("./Img/logo9.jpg")}
              alt=""
              className="p-2"
            />
              </li>
              <li>
              <img
              src={require("./Img/logo10.jpg")}
              alt=""
              className="p-2"
            />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
