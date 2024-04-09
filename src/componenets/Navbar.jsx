import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                alt="PayPal"
              />
              <img
                className="hidden lg:block h-8 w-auto bg-white  bor"
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                alt="PayPal"
              />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-900 focus:outline-none"
              >
                Personal
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-900 focus:outline-none"
              >
                Business
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-900 focus:outline-none"
              >
                Developer 
              </a>

              <a
                href="#"
                className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-900 focus:outline-none"
              >
              Help
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button type="button" className="text-white bg-white-100 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400">Log In</button>

          
            <button type="button" className="text-white bg-white-100 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400">Sign In</button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            Personal
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 text-base font-medium text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            Business
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 text-base font-medium text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            Developer 
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 text-base font-medium text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            Help
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="mt-3">
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-white-100 bg-blue-500 rounded-md hover:text-white-500 hover:bg-blue-50 focus:outline-none focus:text-white-500 focus:bg-blue-50 transition duration-150 ease-in-out"
            >
              Log In
            </a>
          </div>
          <div className="mt-3">
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-white-100 bg-blue-500 rounded-ml hover:text-blue-100 hover:bg-blue-50 focus:outline-none focus:text-blue-500 focus:bg-blue-50 transition duration-150 ease-in-out"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
