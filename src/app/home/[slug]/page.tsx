"use client";
import { useAppContext } from "@/context/ApplicationContext";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const HomePage = () => {
  const { appInfo } = useAppContext() || {};
  const path = usePathname();
  const slug = path.split("/").pop();
  const information = useMemo(() => {
    if (appInfo) {
      return appInfo?.find((item: any) => item.homeId === slug);
    }
  }, [appInfo, slug]);
  const recentBills = information?.bills || [];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Home and Tenant Details */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Home and Tenant Details
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Home Id</span>
              <span className="font-medium">{information.homeId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Address</span>
              <span className="font-medium">{information.homeAddress}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tenant Name</span>
              <span className="font-medium">{information?.tenantName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone Number</span>
              <span className="font-medium">
                {information?.tenantPhoneNummber}
              </span>
            </div>
          </div>
        </div>

        {/* Log Bills */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Log Bills</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-gray-600">Previous Meter Reading:</span>
              <span className="ml-2 font-semibold">
                {information?.previousMeterReading}
              </span>
            </div>
            <div className="flex items-center">
              <label htmlFor="currentReading" className="text-gray-600 mr-2">
                Current Meter Reading:
              </label>
              <input
                type="number"
                id="currentReading"
                className="w-full md:w-48 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => {
                console.log("LOG DATA");
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Rent and Electricity Bill Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Rent and Electricity Bill
        </h2>
        <div className="overflow-y-auto max-h-[20rem]">
          <table className="min-w-full bg-white">
            <thead className="sticky top-0 bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Rent</th>
                <th className="py-2 px-4 text-left">Meter Reading</th>
                <th className="py-2 px-4 text-left">Electricity Bill</th>
              </tr>
            </thead>
            <tbody>
              {recentBills?.map(
                (
                  row: { month: string; rent: number; electricity: number },
                  index: any
                ) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{row.month}</td>
                    <td className="px-4 py-2">{row.rent}</td>
                    <td className="px-4 py-2">{row.electricity}</td>
                    <td className="px-4 py-2">{row.electricity}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
