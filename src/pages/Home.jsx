import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="flex justify-between items-center p-10 py-20 m-10">
        <div className="">
          <h1 className="mb-4  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Workforce Management Software
          </h1>
          <p className="mb-6 font-normal text-gray-700 lg:text-xl">
            Simplify employee scheduling, task management, attendance, and help
            managers make the right decisions in the moment.
          </p>
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Book a Call
          </button>

          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Get Started
          </button>
        </div>

        <div className="">
          <img src={hero} alt="hero" className="w-50 h-50" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
