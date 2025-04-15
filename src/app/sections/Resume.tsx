import React from "react";
import Title from "../components/Title";

const Resume = () => {
  return (
    <div>
      <Title title="Resume 📁" />
      <a className="underline font-semibold" download href="/documents/Jalal-Manafi-Resume.pdf">
        Download my resume
      </a>
    </div>
  );
};

export default Resume;
