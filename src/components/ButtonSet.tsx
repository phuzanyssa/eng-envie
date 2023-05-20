import { Typography } from "@mui/material";
import React from "react";
import themeEng from "@styles/theme";
import { ThemeProvider } from "@mui/material/styles";

interface IProp {
  title: string;
  size: string;
  set: string;
  onClick?: () => void;
}

const ButtonSet = ({ title, set, size, onClick }: IProp) => {
  let className = "rounded-[32px] duration-300 hover:scale-110   ";
  let btnSize = "";

  if (set === "1") {
    className +=
      " hover:shadow-white-blue hover:shadow-md bg-transparent text-white-pink hover:bg-yellow-main hover:text-grey-shadow";
  } else if (set === "2") {
    className +=
      " hover:shadow-white-pink hover:shadow-md bg-yellow-main text-grey-shadow hover:bg-transparent hover:text-white-pink hover:outline hover:border-yellow-main";
  } else if (set === "3") {
    className +=
      " hover:shadow-yellow-light hover:shadow-md border md:border-2 solid border-yellow-main text-yellow-main hover:border-white-pink hover:text-white-pink";
  } else {
    className += " text-yellow-main";
  }

  if (size === "s") {
    btnSize = " w-24 h-12 md:h-14 md:w-24 lg:w-32";
  } else if (size === "m") {
    btnSize = " w-32 h-12 md:h-14 md:w-32 xl:w-56";
  } else if (size === "l") {
    btnSize = " w-32 h-12 md:h-14 md:w-40 lg:w-56";
  } else {
    btnSize = "w-32 h-14";
  }

  className += btnSize;

  return (
    <ThemeProvider theme={themeEng}>
      <button z-10 type="button" onClick={onClick} className={className}>
        <Typography variant="button">{title}</Typography>
      </button>
    </ThemeProvider>
  );
};

export default ButtonSet;
