import React from "react";
import MerebImage from "../Assets/mereb-removebg-preview.png";

const Nav = () => {
  return (
    <nav className=" w-full z-20 top-0 left-0 bg-white bg-gray-500 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://mereb.tech/"
          className="flex items-center cursor-pointer"
        >
          <img src={MerebImage} className="h-8" alt="Flowbite Logo" />
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <a
            href="#"
            className="block py-2 px-3 text-white"
            aria-current="page"
          >
            mereb.tech cahllenge
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
