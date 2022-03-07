import React from "react";

const Modal = ({onCancel}) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button onClick={onCancel} className="btn btn--alt">Cancel</button>
      <button onClick={onCancel} className="btn">Confirm</button>
    </div>
  );
};

export default Modal;
