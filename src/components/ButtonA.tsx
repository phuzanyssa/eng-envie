import { Typography } from "@mui/material";
import React from "react";
import themeEng from "@styles/theme";
import { ThemeProvider } from "@mui/material/styles";

interface IProp {
  title: string;
  key: string;
  color?: "none" | "yellow";
  onClick?: () => void;
}

const ButtonA = ({ title, color, key = "none", onClick }: IProp) => {
  return (
    <ThemeProvider theme={themeEng}>
      <button
        z-10
        type="button"
        onClick={onClick}
        className={`rounded-2xl px-[26px] py-3 duration-300 hover:scale-110 hover:animate-jelly hover:shadow-2xl ${
          color === "none"
            ? "border-0 border-yellow-main bg-transparent hover:bg-gray-800 hover:text-yellow-main"
            : "bg-yellow-main hover:bg-gray-800 hover:text-yellow-main"
        } `}
      >
        <Typography variant="h3">{title}</Typography>
      </button>
    </ThemeProvider>
  );
};

export default ButtonA;
