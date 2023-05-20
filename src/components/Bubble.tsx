import { Typography } from "@mui/material";
import React from "react";
import themeEng from "@styles/theme";
import { ThemeProvider } from "@mui/material/styles";

interface IProp {
  title: string;

  type: string;
}

const Bubble = ({ title, type }: IProp) => {
  let className = " h-fit ";
  if (type === "l") {
    className +=
      "rounded-r-[32px] w-4/5 -bg-white-yellow text-white-yellow rounded-bl-[32px] shadow-xl shadow-grey-shadow px-4 py-4";
  } else {
    className +=
      "rounded-l-[32px] max-w-4/5 shadow-xl bg-yellow-main text-grey-shadow shadow-grey-shadow rounded-br-[32px] px-4 py-4";
  }

  return (
    <ThemeProvider theme={themeEng}>
      <div className={className}>
        <Typography variant="h4">{title}</Typography>
      </div>
    </ThemeProvider>
  );
};

export default Bubble;
