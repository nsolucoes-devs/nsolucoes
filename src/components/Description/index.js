import React from "react";

const Description = ({ children }) => {
  return (
    <p
      style={{
        fontSize: "20px",
        lineHeight: "30px",
      }}
    >
      {children}
    </p>
  );
};

export default Description;
