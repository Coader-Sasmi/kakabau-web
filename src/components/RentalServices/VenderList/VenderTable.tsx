"use client";

import React from "react";
const Table = ({data}:any) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-700 rounded-lg">
       
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left border-b">ID</th>
            <th className="py-3 px-6 text-left border-b">Name</th>
            <th className="py-3 px-6 text-left border-b">Email</th>
            <th className="py-3 px-6 text-left border-b">Action</th>
          </tr>
        </thead>

        <tbody className="bg-gray-900 text-gray-300">
          {data.map((item:any) => (
            <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
              <td className="py-3 px-6">{item.id}</td>
              <td className="py-3 px-6">{item.name}</td>
              <td className="py-3 px-6">{item.email}</td>
              <td className="py-3 px-6">
                <button className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="justify-center items-center flex gap-5">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Table;



