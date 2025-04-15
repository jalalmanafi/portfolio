import React from "react";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return <div className="mb-5 max-[400px]:mb-1 font-semibold text-xl max-[400px]:text-lg">{title}</div>;
};

export default Title;
