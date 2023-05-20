import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { MENU } from "@constants/Menu";
import { Typography } from "@mui/material";
import LogoText from "./Logo";
import ButtonSet from "./ButtonSet";
import DropdownMenu from "./DropdownMenu";

interface IProp {
  menuType: string;
}

const Menu = ({ menuType }) => {
  const router = useRouter();
  const backToYou = () => {
    router.back();
  };
  const moveToYou = () => {
    router.push(`/role/`);
  };

  let hideShow1 = " ";
  let hideShow2 = " ";
  let setGrid = " ";

  if (menuType === "1") {
    hideShow1 = "hidden";
    hideShow2 = "hidden";
    setGrid = "grid grid-flow-col grid-cols-2";
  } else if (menuType === "2") {
    hideShow1 = " ";
    hideShow2 = "hidden";
    setGrid = "grid grid-flow-col grid-cols-3";
  } else {
    hideShow1 = "hidden";
    hideShow2 = " ";
    setGrid = "grid grid-flow-col grid-cols-3";
  }
  return (
    <div className={`${setGrid} w-full gap-8 px-2 py-4 sm:px-16`}>
      <div className={`flex justify-center ${hideShow2}`}>
        <ButtonSet title="< Back" set="3" size="s" onClick={backToYou} />
      </div>

      <div className="text-center">
        <LogoText />
      </div>

      <div className="hidden justify-center gap-4 self-stretch sm:grid sm:grid-flow-col sm:grid-cols-3">
        {MENU.map((_data) => (
          <Link key={uuidv4()} href={_data.href}>
            <ButtonSet title={_data.title} set="1" size="s" />
          </Link>
        ))}
      </div>
      <div className="relative flex w-full justify-center sm:hidden">
        <DropdownMenu title="Menu" />
      </div>

      <div className={`flex justify-center ${hideShow1}`}>
        <ButtonSet title="Start" set="2" size="s" onClick={moveToYou} />
      </div>
    </div>
  );
};

export default Menu;
