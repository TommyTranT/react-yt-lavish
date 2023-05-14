/* Create button styles so we can edit them in the future without making custom css classes
1. Create the classes for the button style, size and color.
2. checkButtonStyle will see if the style has been set. IF the style has not been set, set the style to STYLES list spot 0 as a default. Same with color and size. 
*/

import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
