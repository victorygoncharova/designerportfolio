import React from "react";

const List = ({ listClass, children }) => {
  return <ul className={listClass}>{children}</ul>;
};

export default List;
