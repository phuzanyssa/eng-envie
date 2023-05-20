import React from "react";
import themeEng from "@styles/theme";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

interface IProp {
  onClick?: () => void;
}

const LogoText = ({ onClick }: IProp) => {
  return (
    <ThemeProvider theme={themeEng}>
      <Link key={uuidv4()} href="/">
        <button
          z-10
          type="button"
          onClick={onClick}
          className={`scale-75 rounded-2xl duration-300 hover:scale-110 hover:animate-jelly md:scale-100 `}
        >
          <Typography variant="h1">
            <span style={{ color: "#fff" }}>En</span>
            <span style={{ color: "#ffd600" }}>g </span>
            <span style={{ color: "#fff" }}>Envi</span>
            <span style={{ color: "#ffd600" }}>e</span>
          </Typography>
        </button>
      </Link>
    </ThemeProvider>
  );
};

export default LogoText;
