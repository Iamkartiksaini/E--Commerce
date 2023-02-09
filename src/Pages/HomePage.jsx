import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tsFile from "./index.ts";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import mainSofa from "../assests/MainSofa.png";
import sofa_1 from "../assests/Rectangle.png";
import sofa_2 from "../assests/Rectangle (1).png";
import sofa_3 from "../assests/Rectangle (2).png";
import SideBar from "../Component/SideBar";

import { Badge } from "primereact/badge";
import Shipping from "../Component/Shipping";
import Offers from "./Offers";

function HomePage() {
  const [mainImage, setMainImage] = useState(mainSofa);
  const value = useSelector((state) => state.user);
  const dis = useDispatch();
  const input = useRef();
  console.log(tsFile);

  return (
    <div className=" flex gap-3 p-3  ">
      <SideBar />
      <div className="  flex-column gap-4" style={{ flexBasis: "80%" }}>
        <div
          className="Route flex gap-4 justify-content-center bg-blue-50
        flex  px-3 py-3
        "
        >
          <p className=" text-green-500 bg-transparent">Home</p>
          <p className=" text-color bg-transparent">Shop</p>
          <p className=" text-color bg-transparent">Blog</p>
          <p className=" text-color bg-transparent">About</p>
          <p className=" text-color bg-transparent">Contact Us</p>
        </div>
        {/* <==== After Route Tab ====> */}
        <div className="flex-column ">
          <div className="Design flex justify-content-between mt-3 p-4 bg-green-50">
            <div
              className="text flex flex-column gap-5 py-7 "
              style={{ flexBasis: "30%" }}
            >
              <h3 className="text-green-500">TOP COLLECTIONS 2022</h3>
              <h1 className="text-color">
                We Serve Your Dream <span className="">Furniture</span>
              </h1>
              <h3 className="text-color">Get 50% off all products</h3>
              <Button
                label="Shop Now"
                className=" p-button-success w-8"
              ></Button>
            </div>

            <div
              className="Graphic flex  justify-content-end  "
              style={{
                backgroundImage: `url("${mainImage}")`,
                flexBasis: "70%",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "70%",
                backgroundPositionY: "50%",
                backgroundSize: "60%",
              }}
            >
              <div className="sofas flex flex-column justify-content-evenly text-black-alpha-50 text-xs ">
                <div className="bg-white flex flex-column justify-content-center align-items-center border-round-xs p-2 ">
                  <img src={sofa_1} className="w-8" alt="" />
                  <h3 className="text-green-500">$120</h3>
                  <p>Office desk Chair</p>
                </div>
                <div className="bg-white flex flex-column justify-content-center align-items-center border-round-xs p-2 ">
                  <img src={sofa_2} className="w-8" alt="" />
                  <h3 className="text-green-500">$120</h3>
                  <p>Office desk Chair</p>
                </div>
                <div className="bg-white flex flex-column justify-content-center align-items-center border-round-xs p-2 ">
                  <img src={sofa_3} className="w-8" alt="" />
                  <h3 className="text-green-500">$120</h3>
                  <p>Office desk Chair</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-content-center gap-3 py-6 bg-green-50 ">
            <Badge value="1" className="bg-green-500" />
            <Badge value="2" className="bg-green-500" />
            <Badge value="3" className="bg-green-500" />
            <Badge value="4" className="bg-green-500" />
          </div>
        </div>
        {/* <div className="mt-9">
          <InputText />
          <Button
            className=""
            onClick={() => {
              return input.current.value !== ""
                ? dis({ type: "updateName", name: input.current.value })
                : null;
            }}
          >
            click
          </Button>
          <p>{value.username}</p>
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;
