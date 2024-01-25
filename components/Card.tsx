import { card_interface } from "@/interfaces/interface";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Card: React.FC<card_interface> = ({ id, source, imgSrc, videoTitle }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // play video on click of the card
  const playVideo = async () => {
    if (videoRef.current) {
      videoRef.current.src = source;
      videoRef.current.load();
      videoRef.current.play();
      setShow(true);
    }
  };

  // close the video on the click of times or cross icon
  const closeVideo = async () => {
    if (videoRef.current) {
      videoRef.current.src = "";
      videoRef.current.load();
      videoRef.current.pause();
      setShow(false);
    }
  };

  return (
    <>
      <div
        className={`fixed ${
          show ? "flex" : "hidden"
        } inset-0  items-center justify-center z-50`}
      >
        <div className="bg-slate-800  shadow-xl">
          <div className="p-4">
            <h3 className="text-2xl text-center tracking-wider font-serif uppercase font-semibold text-white">
              {videoTitle}
            </h3>
            <div className="bg-slate-800 p-4 flex justify-end">
              <FaTimes
                title="close"
                onClick={closeVideo}
                className="text-red-500 text-2xl transition ease-in-out duration-200 hover:scale-125 cursor-pointer"
              />
            </div>
            <div className="mt-0 p-5">
              <video
                ref={videoRef}
                className=" w-[520px] sm:w-[600px] h-72"
                autoPlay
                src=""
                controls
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "200px",
          height: "200px",
          marginTop: "5px",
        }}
      >
        <Image
          onClick={playVideo}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={
            imgSrc ||
            "https://pranami.org/templates/yootheme/cache/6d/slide_3-6d78ff13.jpeg"
          }
          alt=""
          width={300}
          height={300}
          style={{
            objectFit: "cover", // You can use "cover" to maintain aspect ratio and fill the container
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            transition: "all 250ms ease-in-out 0s",
            maxWidth: "200px", // Set the maximum width
            transform: isHovering ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
    </>
  );
};

export default Card;
