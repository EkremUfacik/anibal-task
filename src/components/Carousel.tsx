"use client";

import Image from "next/image";
import Slider from "react-slick";
import coffee1 from "public/assets/coffee1.jpg";
import coffee2 from "public/assets/coffee2.jpg";
import coffee3 from "public/assets/coffee3.jpg";
import coffee4 from "public/assets/coffee4.jpg";
import coffee5 from "public/assets/coffee5.jpg";
import coffee6 from "public/assets/coffee6.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-center text-2xl text-warning-600 font-semibold my-8 ">
        OUR COFFEES
      </h2>
      <Slider {...settings} className="cursor-grab">
        <div className="h-[500px] px-2">
          <Image
            src={coffee1}
            className="w-full h-full"
            width={500}
            height={600}
            alt="coffee"
          />
        </div>
        <div className="h-[500px]  px-2">
          <Image
            src={coffee2}
            className="w-full h-full"
            width={500}
            height={600}
            alt="coffee"
          />
        </div>
        <div className="h-[500px]  px-2">
          <Image
            src={coffee3}
            className="w-full h-full"
            width={500}
            height={600}
            alt="coffee"
          />
        </div>
        <div className="h-[500px]  px-2">
          <Image
            src={coffee4}
            className="w-full h-full"
            width={500}
            height={600}
            alt="coffee"
          />
        </div>
        <div className="h-[500px]  px-2">
          <Image
            src={coffee5}
            className="w-full h-full"
            width={500}
            height={600}
            alt="coffee"
          />
        </div>
        <div className="h-[500px]  px-2">
          <Image
            src={coffee6}
            className="w-full h-full"
            width={500}
            height={600}
            alt="coffee"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
