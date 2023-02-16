import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ReportingAbilities = () => {
  return (
    <div>
      <Header />

      <div className="mt-10 w-[600px] ">
        <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl">
          This web page enables{" "}
          <mark className="px-2 text-white bg-gray-700 rounded dark:bg-gray-700">
            employees
          </mark>{" "}
          to submit{" "}
          <mark className="px-2 text-white bg-gray-700 rounded dark:bg-gray-700">
            Reports.
          </mark>
        </h2>
      </div>

      <div className="w-[800px] mt-10">
        <div>
          <h3 className="font-extrabold text-xl mb-2">Reporting Message: </h3>
        </div>

        <div>
          <form>
            <div className="w-full p-2 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <label
                for="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Emp Name"
                />
              </div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Employee ID
              </label>
              <div className="flex mb-2">
                <input
                  type="text"
                  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="00"
                />
              </div>

              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  className="w-full h-32 px-0  text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-0"
                  placeholder="Write a report..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReportingAbilities;
