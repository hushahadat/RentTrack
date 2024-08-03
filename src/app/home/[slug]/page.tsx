'use client'
import React from "react";


const HomePage = () => {
  const rows = [
    { month: "January", rent: "$1000", electricity: "$150" },
    { month: "February", rent: "$1000", electricity: "$130" },
    { month: "March", rent: "$1000", electricity: "$120" },
    { month: "April", rent: "$1000", electricity: "$140" },
    { month: "May", rent: "$1000", electricity: "$135" },
    { month: "June", rent: "$1000", electricity: "$145" },
    { month: "July", rent: "$1000", electricity: "$150" },
    { month: "August", rent: "$1000", electricity: "$125" },
    { month: "September", rent: "$1000", electricity: "$130" },
    { month: "October", rent: "$1000", electricity: "$140" },
    { month: "November", rent: "$1000", electricity: "$135" },
    { month: "December", rent: "$1000", electricity: "$145" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 md:max-h-[20rem]">
        <div>
          <div className="bg-white shadow-md rounded-lg p-4 md:max-h-48 mb-2 overflow-auto">
            <h2 className="text-xl font-bold mb-3">Home and Tenant Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Home Name
                </label>
                <p className="mt-1 text-gray-900">Sample Home</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <p className="mt-1 text-gray-900">
                  123 Main Street, City, Country
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tenant Name
                </label>
                <p className="mt-1 text-gray-900">John Doe</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <p className="mt-1 text-gray-900">+123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 md:max-h-48 overflow-auto">
            <h2 className="text-xl font-bold mb-4">Log Bills</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
              <div>
                <label className=" inline text-sm font-medium text-gray-700">
                  Previos Meter Reading - 
                </label>
                <p className="ml-4 mt-1 text-gray-900 font-semibold inline">1121</p>
              </div>
              <div>
                <label className="inline text-sm font-medium text-gray-700 md:mr-3">
                  Current Meter Reading - 
                </label>
                <input type="number" className="w-[9rem] md:w-[20rem] ml-1 inline border border-gray-300 rounded-lg py-1 px-1 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                
              </div>
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => {
                    console.log("LOG DATA");
                  }}
                >
                  SUBMIT
                </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 ">
          <h2 className="text-2xl font-bold mb-4">Rent and Electricity Bill</h2>
          <div className="overflow-auto max-h-[20rem]">
            <table className="min-w-full bg-white">
              <thead className="sticky top-0 bg-gray-200">
                <tr>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Rent</th>
                  <th className="py-2 px-4">Meter Reading</th>
                  <th className="py-2 px-4">Electricity Bill</th>
                </tr>
              </thead>
              <tbody>
                {rows?.map((row, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{row.month}</td>
                    <td className="border px-4 py-2">{row.rent}</td>
                    <td className="border px-4 py-2">{row.electricity}</td>
                    <td className="border px-4 py-2">{row.electricity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
