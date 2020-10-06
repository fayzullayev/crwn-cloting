import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ inverted, isGoogle, children, ...otherProps }) => {
  return (
    <button
      className={`${inverted && "inverted"} ${
        isGoogle && "google"
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default React.memo(CustomButton);
