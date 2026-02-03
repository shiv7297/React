import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      {/* HERO SECTION */}
      <aside className="relative overflow-hidden rounded-lg bg-white sm:py-16 py-10">
        <div className="relative z-10 max-w-xl ml-auto text-center sm:text-right space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Download Now
            <span className="block text-2xl sm:text-4xl text-gray-600">
              Lorem Ipsum
            </span>
          </h2>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-orange-700 text-white font-medium rounded-lg hover:opacity-80"
          >
            <svg
              className="mr-2"
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 4h16v-2H4v2z" />
            </svg>
            Download Now
          </Link>
        </div>

        {/* HERO IMAGE */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden sm:block">
          <img
            src="https://images.pexels.com/photos/3483918/pexels-photo-3483918.jpeg"
            alt="Remote"
            className="w-72 max-w-full"
          />
        </div>
      </aside>

      {/* SECOND IMAGE */}
      <div className="flex justify-center mt-16">
        <img
          src="https://images.pexels.com/photos/4542852/pexels-photo-4542852.jpeg"
          alt="Remote"
          className="w-48 sm:w-80 max-w-full"
        />
      </div>

      {/* FOOTER TEXT */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
