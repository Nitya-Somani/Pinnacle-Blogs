import React from 'react';

function CustomFooter() {
  return (
    <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center">
          <a
            href="#!"
            className="m-1 h-9 w-9 p-1 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="#!"
            className="m-1 h-9 w-9 p-1 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="#!"
            className="m-1 h-9 w-9 p-1 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="#!"
            className="m-1 h-9 w-9 p-1 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div className="w-full p-4 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://tw-elements.com/">
          Nitya Somani
        </a>
      </div>
    </footer>
  );
}

export default CustomFooter;
