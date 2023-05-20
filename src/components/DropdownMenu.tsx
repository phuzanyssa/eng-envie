import React, { useState } from "react";
import themeEng from "@styles/theme";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import ButtonSet from "./ButtonSet";

interface IProp {
  title: string;
  onClick?: () => void;
}

const DropdownMenu = ({ title, onClick }: IProp) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const setNumber = showContent ? "3" : "1";
  const setNumber2 = showContent ? "1" : "2";
  return (
    <ThemeProvider theme={themeEng}>
      <ButtonSet
        title={title}
        onClick={toggleContent}
        set={`${setNumber}`}
        size="s"
      />
      {showContent && (
        <div className="absolute mt-16 grid  w-full grid-cols-3 content-center justify-items-center gap-16 ">
          <Link href="/">
            <ButtonSet title="Home" set={`${setNumber2}`} size="s" />
          </Link>
          <Link href="/explore">
            <ButtonSet title="Explore" set={`${setNumber2}`} size="s" />
          </Link>
          <Link href="/about">
            <ButtonSet title="About" set={`${setNumber2}`} size="s" />
          </Link>
        </div>
      )}
    </ThemeProvider>
  );
};

export default DropdownMenu;
