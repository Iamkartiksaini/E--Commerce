import React from "react";

function SideBar() {
  return (
    <div style={{ flexBasis: "20%" }}>
      <div className=" flex gap-2 bg-green-500 text-white px-3  py-3  ">
        <i className="pi pi-align-left"></i>
        <span>All Collection</span>
      </div>
      <div className="items text-black-alpha-80">
        <p className="px-3 py-3 bg-blue-50">All</p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          New Arrivals
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Hot Sale
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Furniture
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Amrature
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Table
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Chair
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Sofa
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Mirror
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Stools
        </p>
        <p className="px-3 hover:bg-green-500 hover:text-white py-3  bg-blue-50 border-top-1 border-black-alpha-10">
          Benches
        </p>
      </div>
    </div>
  );
}

export default SideBar;
