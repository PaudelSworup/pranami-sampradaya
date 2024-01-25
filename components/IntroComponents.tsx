import { light_dark } from "@/interfaces/interface";
import Image from "next/image";
import React from "react";

const IntroComponents: React.FC<light_dark> = (props) => {
  return (
    <div className="sm:flex p-10 justify-center gap-20 items-center">
      <div className="flex sm:flex justify-center items-center">
        <Image
          src={props?.image || ""}
          alt=""
          width={300}
          height={200} // Set the desired height
          style={{ borderRadius: "10px" }} // Maintain aspect ratio and apply styling
        />
      </div>
      <div className="max-w-full w-[600px]">
        <p
          className={`text-justify text-lg tracking-wider font-serif ${
            props?.darkmode ? "text-white" : "text-black"
          }`}
        >
          {props?.details}
        </p>
      </div>
    </div>
  );
};

export default IntroComponents;
