import { light_dark } from "@/interfaces/interface";
import React from "react";
import IntroComponents from "./IntroComponents";
import {
  chatrasalji,
  devchandraji,
  img1,
  img2,
  img3,
  img4,
  introduction,
  prananathji,
} from "@/IntroContents.tsx/Rajji_shyamaji_detail";

const Intro: React.FC<light_dark> = (props) => {
  return (
    <>
      <h2
        className={`${
          props?.darkmode ? "text-white" : "text-black"
        } text-center underline font-serif uppercase font-bold text-2xl p-2 tracking-widest`}
      >
        Introduction
      </h2>
      <IntroComponents
        darkmode={props?.darkmode}
        details={introduction}
        image={img1}
      />

      <h2
        className={`${
          props?.darkmode ? "text-white" : "text-black"
        } text-center underline font-serif uppercase font-bold text-2xl p-2 tracking-widest`}
      >
        History
      </h2>
      <IntroComponents
        darkmode={props?.darkmode}
        details={devchandraji}
        image={img2}
      />

      <IntroComponents
        darkmode={props?.darkmode}
        details={prananathji}
        image={img3}
      />

      <IntroComponents
        darkmode={props?.darkmode}
        details={chatrasalji}
        image={img4}
      />
    </>
  );
};

export default Intro;
