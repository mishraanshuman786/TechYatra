"use client";

import React , {useState} from 'react';
import Image from 'next/image';

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Enquiry submitted successfully!");
    setShowModal(false);
  };

  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        
        {/* COLUMN 1 - TEXT & BUTTONS */}
        <div className="mx-auto sm:mx-0">
          <div className="py-3 text-center lg:text-start">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              FROM IDEAS TO EXECUTION
            </button>
          </div>

          <div className="py-3 text-center lg:text-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-darkpurple leading-tight">
              We Build <br /> Smart, Scalable <br /> Digital Solutions.
            </h1>
          </div>

          {/* Enquiry Form Button */}
          <div className="my-7 text-center lg:text-start">
            <button
              onClick={() => setShowModal(true)}
              className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue"
            >
              Enquiry Form
            </button>
          </div>
        </div>

        {/* COLUMN 2 - IMAGE */}
        <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <Image
            src="/images/banner/banner.svg"
            alt="hero-image"
            width={800}
            height={642}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border p-2 mb-3 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border p-2 mb-3 rounded"
              />
              <textarea
                placeholder="Your Message"
                required
                className="w-full border p-2 mb-3 rounded"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
