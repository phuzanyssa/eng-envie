import React, { useState } from "react";
import Link from "next/link";
import themeEng from "@styles/theme";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Image from "next/image";
import ButtonSet from "./ButtonSet";

interface IProp {
  title: string;
  imgName: string;
  span1: string;
  span2: string;
  span3: string;
  onClick?: () => void;
}

const Card = ({ title, imgName, span1, span2, span3, onClick }: IProp) => {
  const [showContent, setShowContent] = useState(false);

  function clickMe() {
    setShowContent((showContent) => !showContent);
  }
  const hiddenPls = showContent ? " " : " hidden";
  const beBottom = showContent
    ? "lg:order-3 content-center justify-items-center lg:row-span-3"
    : "row-span-3 order-1";
  const beBottom2 = showContent
    ? "order-3 h-full w-full content-center justify-items-center "
    : "order-1";
  const rearrange1 = showContent
    ? " lg:row-span-1 lg:mt-4"
    : "-bgYellowBottom h-full row-span-1";
  const rearrange2 = showContent
    ? "lg:row-span-2 lg:mt-4"
    : "-bgYellowRight textColor h-full";
  const resizeImg = showContent ? "  lg:w-[200px]" : "xl:w-[256px]";
  const setGridRow = showContent ? "grid-rows-2 " : "grid-rows-4";
  const setPosition = showContent ? "content-start" : "content-center";

  return (
    <ThemeProvider theme={themeEng}>
      <button type="button" className="Card z-40 lg:w-full " onClick={clickMe}>
        <div
          className={`${setGridRow} hidden h-full justify-items-center rounded-[32px] bg-gradient-to-bl from-grey-main to-grey-shadow drop-shadow-xl  transition-colors duration-300 hover:bg-gradient-to-br hover:from-yellow-main hover:to-yellow-main lg:grid`}
        >
          <div
            className={` flex h-full items-center justify-center ${beBottom}`}
          >
            <Image
              key="img"
              src={imgName}
              alt="img"
              width={256}
              height={256}
              className={`imgCard ${resizeImg} w-[200px]`}
            />
          </div>
          <div
            className={` order-2 flex w-full flex-col content-start justify-center gap-4 ${rearrange1}`}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#ffd600"
              className="text1 flex flex-row justify-center  justify-items-end "
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              className={`text2 h-1/2 px-4 text-white-yellow  ${hiddenPls}`}
            >
              <p>{span1}</p>
              <p className="opacity-0">&nbsp; </p>
              <p>{span2}</p>
              <p className="opacity-0">&nbsp; </p>
              <p>{span3}</p>
            </Typography>
          </div>
        </div>
        <div className=" grid h-full grid-cols-2 gap-0 rounded-[32px] bg-gradient-to-r from-grey-main to-grey-shadow hover:from-white-pink/50 hover:to-yellow-main lg:hidden ">
          <div
            className={` grid content-center justify-items-center ${beBottom2}`}
          >
            <Image
              key="img"
              src={imgName}
              alt="img"
              width={128}
              height={128}
              className="imgCard"
            />
          </div>
          <div
            className={` order-2 grid ${setPosition} justify-items-center gap-4 ${rearrange2}`}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#ffd600"
              className="text1  flex w-full justify-center "
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              className={`text2 flex flex-col px-2 text-white-pink ${hiddenPls}`}
            >
              <p>{span1}</p>
              <p className="opacity-0">&nbsp; </p>
              <p>{span2}</p>
              <p className="opacity-0">&nbsp; </p>
              <p>{span3}</p>
            </Typography>
          </div>
        </div>
      </button>
    </ThemeProvider>
  );
};

export default Card;
