/** @format */

import React from "react";
import sortvisualiser from "../assets/portfolio/sort visualiser.png";
import expensetracker from "../assets/portfolio/expense tracker.png";
import facemask from "../assets/portfolio/facemask.jpg";
import blogwriter from "../assets/portfolio/blog writer.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: sortvisualiser,
      code: "https://github.com/Sathwikshetty16/sortingvisualiser",
      title: "Sort Visualiser",
    },
    {
      id: 2,
      src: expensetracker,
      code: "https://github.com/Sathwikshetty16/moneytracker",
      title: "Expense Tracker",
    },
    {
      id: 3,
      src: facemask,
      code: "https://github.com/Sathwikshetty16/face-detection",
      title: "Face mask detection Using deep learning",
    },
    {
      id: 4,
      src: blogwriter,
      code: "https://github.com/Sathwikshetty16/BharatIntern-task1",
      title: "Blog Writer",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center px-4 py-10 w-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </h2>
          <h3 className="py-6">Check out some of my projects</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code, title }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="object-cover w-full h-48 hover:scale-105 duration-300"
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="mx-auto mt-6 font-bold text-xl">{title}</h2>
                <div className="flex justify-center items-center">
                  <a href={code} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-2 m-2 hover:scale-105 duration-300">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
