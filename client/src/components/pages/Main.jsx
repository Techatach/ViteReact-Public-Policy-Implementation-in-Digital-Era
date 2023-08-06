import React, { useEffect, useState } from "react";

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5173/main").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full bg-blue-600 rounded-lg justify-between flex items-center px-10">
        <h1 className="text-white text-3xl font-semibold p-4 hover:text-red-950">
          Crud
        </h1>
        <button className="bg-white text-blue-600 rounded-lg px-3 py-2 font-semibold text-xl hover:text-red-950">
          Add Users
        </button>
      </div>
      <div className="w-full flex flex-col min-h-[35vh] justify-center items-center">
        <h1 className="text-black text-3xl font-semibold">Home Page</h1>

        <table className="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8">
          <thead className="border-b bg-gray-800">
            <tr>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                #
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Email
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Phone
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Action
              </th>
            </tr>
          </thead>
          {console.log(users)}
          <tbody>
            <tr className="bg-white border-b border-black">
              <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                Techatach Khlaisokk
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                techatach@gmail.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                099-***-****
              </td>
              <td className="flex justify-center items-center space-x-4 mt-3">
                <button className="text-white hover:text-red-950 bg-blue-800 rounded-lg px-5 py-2 whitespace-nowrap text-sm font-medium">
                  View
                </button>
                <button className="text-white hover:text-red-950 bg-black rounded-lg px-5 py-2 whitespace-nowrap text-sm font-medium">
                  Edit
                </button>
                <button className="text-white hover:text-green-950 bg-red-600 rounded-lg px-5 py-2 whitespace-nowrap text-sm font-medium">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
