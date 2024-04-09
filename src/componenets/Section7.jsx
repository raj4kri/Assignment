import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
function Section7() {
  return (
    <div>
      <div>
     
      <section className="bg-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
          {/* Left Side - Content */}
          <div className="">
            <div className="md:w-1/2 md:pr-8 p-14 ">
              <h2 className="text-3xl font-bold -mt-12 text-black ">
              <RiDoubleQuotesL className='text-white' />
              </h2>
              <p className="text-lg mb-4 text-white">
              The truth must be told .We are here because of PayPal. I am inspired by what PayPay is doing and we want to continue to grow with PayPal.
              </p>
              <p className="text-white ">
               Vipin shahu
              </p>
              <p className="text-white ">
              Co-Founder
              </p>
              <p className="text-white leading-10 ">
              Webkul
              </p>
            </div>
          </div>

          {/* Right Side - Image */}

          <div className="md:w-1/2 md:mt-0 ">
            <img src={require("./Img/img10.jpg")} className="w-full h-full " />
          
          </div>
        </div>
      </section>
    </div>
      
    </div>
  )
}

export default Section7;
