import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

function HomeConatiner() {
  return (
    // HOME SECTION
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">

      {/* LEFT SIDE HOME CONTAINER */}
      <div className="py-2 flex-1 flex flex-col items-start gap-4">
        <div className="flex  items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl ">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          eveniet, odit nisi iusto ratione soluta dolores fuga non natus
          consequatur praesentium repudiandae. Eum dolorum possimus,
          perspiciatis ipsa odit maxime quia?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from bg-orange-600 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          {" "}
          Order Now
        </button>
      </div>

      {/* RIGHT SIDE HOME CONTAINER */}
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto h-400 w-full lg:h-650 lg:w-auto"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-6 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              // Card Id
              <div
                key={n.id}
                className="lg:w-190 p-4 bg-cardOverlay rounded-3xl backdrop-blur-md flex flex-col items-center justify-center drop-shadow-lg"
              >
                {/* CardImage */}
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="i-1"
                />

                {/* Item Name */}
                <p className=" text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                {/* Item Description */}
                <p className=" text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3 ">
                  {n.decp}
                </p>

                {/* Item Price */}
                <p className="text-x5 font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomeConatiner;
