import React, { useState } from "react";
import Link from "next/link";
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
  // imgName, span1, span2, span3,
  onClick?: () => void;
}

const CardBlock = ({ title, imgName, span1, span2, span3, onClick }: IProp) => {
  const [showContent, setShowContent] = useState(false);

  function clickMe() {
    setShowContent((showContent) => !showContent);
  }
  //   const hideShow = showContent ? "contents" : "hidden";
  //   const reOrder = showContent ? "order-2" : " ";
  //   const resizeImg = showContent
  //     ? "lg:2-[64px]"
  //     : "lg:w-[256px] lg:my-16 lg:mx-16";
  return (
    <ThemeProvider theme={themeEng}>
      <button
        type="button"
        className="Card hover:onCLick{clickMe} h-full w-full"
      >
        <div className="grid grid-cols-2 content-between justify-center bg-white lg:grid-cols-1 lg:gap-8">
          <div className="reOrder flex w-full justify-center bg-black">
            <Image
              src={imgName}
              width={200}
              height={200}
              alt="img"
              className="resizeImg"
            />
          </div>
          <div className="grid content-end justify-items-center self-center bg-slate-600">
            <div className="w-full bg-black">
              <Typography variant="h2" color="#ffd600">
                {title}
              </Typography>
            </div>
            <div className="hideShow">
              <Typography variant="h4" color="#ffd600">
                <p>{span1}</p>
                <p>{span2}</p>
                <p>{span3}</p>
              </Typography>
            </div>
          </div>
        </div>
      </button>
    </ThemeProvider>
  );
};

export default CardBlock;
