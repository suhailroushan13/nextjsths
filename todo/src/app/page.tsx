import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Hello, World!</h1>

      {/* Internal Links */}
      <div className="space-x-4 mb-4">
        <Link
          href="/about"
          className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Contact
        </Link>
      </div>

      {/* External Link */}
      <a
        href="https://github.com/suhailroushan13"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-black px-4 py-2 rounded hover:bg-gray-800"
      >
        GitHub Profile
      </a>
    </main>
  );
};

export default page;
