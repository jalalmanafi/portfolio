import React from "react";

import Title from "../components/Title";

const Header = () => {
  return (
    <div className="text-start font-medium text-base">
      <Title title="Hey 👋" />
      <div>My name is <span className="font-bold text-xl">Manafi Jalal</span></div>
      <div>📍 Baku, Azerbaijan</div>
    </div>
  );
};

export default Header;
