import React from 'react'
import image from "./Img/img8.jpg";

const Section5=()=> {
  return (
    <div>
     <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start  bg-green-800 mb-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 bg-cover bg-center h-64 lg:h-auto" style={{backgroundImage: 'url("your-image-url.jpg")'}}>
      </div>
      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-8 mt-24">
        <h2 className="text-5xl font-bold mb-4 text-white lea">Optimize your payment processing</h2>
        <p className="text-2xl mb-4 text-white text-balance">our mix of tools,technology,relationships, and can help you process more transaction succesfully and capture more revenue</p>
        <div className="pl-4 text-blue-400">
       
          <p className="text-base text-balance">Learn how to optimize payment processing</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Section5;
