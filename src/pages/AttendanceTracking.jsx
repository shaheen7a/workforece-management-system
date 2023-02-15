import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AttendanceTracking = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <div>
      <Header />
      <div className='mt-10 w-[600px] '>
        <h2 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl'>
          This web page allows employers to <mark
            className='px-2 text-white bg-gray-700 rounded dark:bg-gray-700'>
            track</mark>their employees' and their <mark className='px-2 text-white bg-gray-700 rounded dark:bg-gray-700'>attendance..</mark></h2>
      </div>

      <div className="mt-10 w-[800px]">
        <h3 className='text-gray-900 font-extrabold'>Attendance: {`${day}-${month}-${year}`}</h3>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4">
                </th>
                <th scope="col" class="px-6 py-3">
                  Employee Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Employee ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Aous
                </th>
                <td class="px-6 py-4">
                  01
                </td>
                <td class="px-6 py-4 text-green-400">
                  Present
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Present</a></td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jaafar
                </th>
                <td class="px-6 py-4">
                  02
                </td>
                <td class="px-6 py-4 text-red-500">
                  Absent
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Present</a></td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Aous
                </th>
                <td class="px-6 py-4">
                  01
                </td>
                <td class="px-6 py-4 text-green-400">
                  Present
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Present</a></td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Aous
                </th>
                <td class="px-6 py-4">
                  01
                </td>
                <td class="px-6 py-4 text-green-400">
                  Present
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Present</a></td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Aous
                </th>
                <td class="px-6 py-4">
                  01
                </td>
                <td class="px-6 py-4 text-green-400">
                  Present
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Present</a></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default AttendanceTracking