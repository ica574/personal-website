"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  useEffect(() => {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbar = document.querySelector('#navbar-default');

    const toggleNavbar = () => {
      navbar.classList.toggle('hidden');
    };

    toggleButton.addEventListener('click', toggleNavbar);

    return () => {
      toggleButton.removeEventListener('click', toggleNavbar);
    };
  }, []);

  return (
    <nav className="bg-opacity-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://isaacciliaattard.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#94E6E5]">Isaac Cilia Attard</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link href="https://isaacciliaattard.com/" className="block py-2 pl-3 pr-4 text-white bg-[#776BE2] rounded md:bg-transparent md:text-[#776BE2] md:p-0" aria-current="page">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;