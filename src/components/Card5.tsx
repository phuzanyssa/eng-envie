import React, { useState } from "react";
import themeEng from "@styles/theme";
import { ThemeProvider } from "@mui/material/styles";

import ButtonSet from "./ButtonSet";

interface IProp {
  title: string;
  onClick?: () => void;
}

const Card = ({ title, onClick }: IProp) => {
  const [showContent, setShowContent] = useState(false);

  function clickMe() {
    setShowContent((showContent) => !showContent);
  }

  return (
    <ThemeProvider theme={themeEng}>
      <button type="button" className="Card z-40 " onClick={clickMe}>
        <div className=" -from-white-pink -to-grey-light -shadow-lg -shadow-grey-shadow grid h-full w-full  grid-cols-1 content-center justify-items-center rounded-[32px] bg-gradient-to-br drop-shadow-xl ">
          <ButtonSet title={`${title}`} set="3" size="l" onClick={onClick} />
        </div>
      </button>
    </ThemeProvider>
  );
};

export default Card;
