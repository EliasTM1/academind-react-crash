import React from "react";

const Backdrop = ({onCancel}) => {
  // ? In JSX we can do self close tags if we do not have content inside the element.
  return <div className="backdrop" onClick={onCancel} />;
};

export default Backdrop;
