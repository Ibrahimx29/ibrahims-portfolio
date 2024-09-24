import React from "react";

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Check mark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
