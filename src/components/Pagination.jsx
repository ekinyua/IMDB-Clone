import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="flex justify-center bg-gray-400 p-4 mt-8">
      <div onClick={handlePrev} className="px-8 hover:cursor-pointer">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={handleNext} className="px-8 hover:cursor-pointer">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
