import React from "react";

function Watchlist() {
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-2">Action</div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-2">Action</div>
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-center">
          <thead className="border-b-2">
            <tr>
              <th>Poster</th>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="flex justify-center items-center py-4">
                <img
                  className="h-[10rem] w-[10rem] object-fill"
                  src={`https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000`}
                />
              </td>
              <td>Oppenheimer</td>
              <td>4.8</td>
              <td>85%</td>
              <td>Drama</td>

              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
