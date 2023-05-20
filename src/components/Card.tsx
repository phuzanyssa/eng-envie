import React, { useState } from "react";
import themeEng from "@styles/theme";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Image from "next/image";

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
  const beBottom = showContent ? "lg:order-3" : " ";
  const rearrange1 = showContent
    ? " h-full lg:w-full lg:row-span-2 lg:mt-4"
    : "bgYellowBottom h-full";
  const rearrange2 = showContent
    ? " h-full lg:w-full lg:row-span-2 lg:mt-4"
    : "bgYellowRight h-full";
  const resizeImg = showContent ? "lg:mt-2 xl:w-[256px] " : "xl:w-[256px]";

  return (
    <ThemeProvider theme={themeEng}>
      <button
        type="button"
        className="Card z-40 w-[400px] md:w-[500px] lg:w-full"
        onClick={clickMe}
      >
        <div className=" hidden h-[450px] grid-rows-4 justify-items-center gap-0 rounded-[32px] bg-white-yellow lg:grid lg:w-[300px] xl:h-[500px] xl:w-[370px] ">
          <div
            className={`order-1 row-span-3 flex items-center justify-center ${beBottom}`}
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
            className={` order-2 row-span-1 flex w-full flex-col content-start justify-center gap-4 ${rearrange1}`}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color="1a1a1a"
              className="flex flex-row justify-center justify-items-end "
            >
              {title}
            </Typography>
            <Typography variant="h4" className={` h-full ${hiddenPls}`}>
              <p>{span1}</p>
              <p className="hidden">&nbsp; </p>
              <p>{span2}</p>
              <p className="hidden">&nbsp; </p>
              <p>{span3}</p>
            </Typography>
          </div>
        </div>

        <div className="grid h-[200px] w-full grid-cols-2 content-between gap-0 rounded-[32px] bg-white-yellow lg:hidden ">
          <div
            className={`order-1 flex items-center justify-center ${beBottom}`}
          >
            <Image
              key="img"
              src={imgName}
              alt="img"
              width={256}
              height={256}
              className={`imgCard ${resizeImg}  max-w-[200px]`}
            />
          </div>
          <div
            className={` order-2 grid h-full w-full content-center justify-items-center gap-4 ${rearrange2}`}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color="1a1a1a"
              className="flex w-full justify-center justify-items-end "
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              className={`flex h-full w-4/5 flex-col ${hiddenPls}`}
            >
              <p>{span1}</p>
              <p className="hidden">&nbsp; </p>
              <p>{span2}</p>
              <p className="hidden">&nbsp; </p>
              <p>{span3}</p>
            </Typography>
          </div>
        </div>
      </button>
    </ThemeProvider>
  );
};

export default Card;
