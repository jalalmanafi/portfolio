import React from "react";

import Title from "../components/Title";

const Header = () => {
  return (
    <div className="text-start font-medium text-base">
      <Title title="Hey 👋" />
      <div>
        My name is{" "}
        <span className="font-bold text-xl text-nowrap">Manafi Jalal</span>
      </div>
      <div className="mt-1 font-medium">
        📍
        <span className="text-gray-800 dark:text-gray-300 opacity-60 text-xs">
          Baku, Azerbaijan
        </span>
      </div>
    </div>
  );
};

export default Header;
