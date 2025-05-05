"use client";
import React, { useState, useEffect } from "react";
import { FaCompactDisc } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Sidebar from "@/components/home/sidebar";
import { IoMdArrowRoundForward } from "react-icons/io";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-nunito  b-[#FAC898] bg-[#ff964f] pb-56">
      <div className="pt-6 px-5 md:px-14 flex justify-between">
        <p className="text-2xl sm:text-3xl font-montserrat font-bold flex items-center">
          <FaCompactDisc className="mx-1 md:mx-2" />
          Fike
        </p>

        <Sidebar />
      </div>

      {/*  */}
      <div className="pt-20">
        <img
          src="/disc3.png"
          alt=""
          className=" w-[80vw] md:w-auto md:h-[60vh] mx-auto rotate-center"
        />
      </div>

      <div className="md:px-10 pt-24 ">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/7ojtOGr5RoVneSEa741KvG?utm_source=generator&theme=0"
          width="100%"
          height="502"
          frameBorder="0"
          // @ts-ignore
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          // loading="lazy"
        ></iframe>

        <div className="flex flex-col mx-auto pt-20 items-center space-y-7">
          <a
            href="https://music.youtube.com/channel/UClt_Nz_Lpz9h9o_rtymW_3g?si=LPkcYOCQFbKX3tYH"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <p className="text-lg font-montserrat font-bold flex items-center justify-center">
              Youtube Music{" "}
              <IoMdArrowRoundForward className="text-xl items-center ml-1 mt-0.5" />
            </p>
          </a>
          {/* apple */}
          <a
            href="https://music.youtube.com/channel/UClt_Nz_Lpz9h9o_rtymW_3g?si=LPkcYOCQFbKX3tYH"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <p className="text-lg font-montserrat font-bold flex items-center justify-center">
              Apple Music
              <IoMdArrowRoundForward className="text-xl items-center ml-1 mt-0.5" />
            </p>
          </a>
          {/* Deezer */}
          <a
            href="https://music.youtube.com/channel/UClt_Nz_Lpz9h9o_rtymW_3g?si=LPkcYOCQFbKX3tYH"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <p className="text-lg font-montserrat font-bold flex items-center justify-center">
              Deezer
              <IoMdArrowRoundForward className="text-xl items-center ml-1 mt-0.5" />
            </p>
          </a>
          {/* Tidal */}
          <a
            href="https://music.youtube.com/channel/UClt_Nz_Lpz9h9o_rtymW_3g?si=LPkcYOCQFbKX3tYH"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <p className="text-lg font-montserrat font-bold flex items-center justify-center">
              Tidal
              <IoMdArrowRoundForward className="text-xl items-center ml-1 mt-0.5" />
            </p>
          </a>
          {/* soundcloud */}
          <a
            href="https://music.youtube.com/channel/UClt_Nz_Lpz9h9o_rtymW_3g?si=LPkcYOCQFbKX3tYH"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <p className="text-lg font-montserrat font-bold flex items-center justify-center">
              SoundCloud
              <IoMdArrowRoundForward className="text-xl items-center ml-1 mt-0.5" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
