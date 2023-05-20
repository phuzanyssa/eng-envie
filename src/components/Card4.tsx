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
  onClick?: () => void;
}

const Card = ({ title, imgName, onClick }: IProp) => {
  const [showContent, setShowContent] = useState(false);

  function clickMe() {
    setShowContent((showContent) => !showContent);
  }

  return (
    <ThemeProvider theme={themeEng}>
      <button type="button" className="Card z-40 " onClick={clickMe}>
        <div className=" grid h-full w-full grid-cols-2 content-center justify-items-center  rounded-[32px] bg-gradient-to-br from-grey-light to-grey-main shadow-lg shadow-grey-shadow hover:from-white-pink/50 hover:to-white-yellow hover:shadow-white">
          <Image
            src={`${imgName}`}
            alt="img"
            width={200}
            height={100}
            className="relative opacity-50"
          />
          <div className="my-4 grid grid-rows-2">
            <Typography
              variant="h3"
              className="textColor top-4 text-yellow-main md:scale-100"
            >
              {title}
            </Typography>
            <div>
              <ButtonSet title="Next" set="2" size="m" onClick={onClick} />
            </div>
          </div>
        </div>
      </button>
    </ThemeProvider>
  );
};

export default Card;
