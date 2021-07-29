import React from "react";

const Link = ({ isLink = false, children }) => {
  return (
    <li>
      {isLink ? (
        <a href="#" className={1}>
          {" "}
          {children}{" "}
        </a>
      ) : (
        <span> {children} </span>
      )}
    </li>
  );
};

export default Link;
