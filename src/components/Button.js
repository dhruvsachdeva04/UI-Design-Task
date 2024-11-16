import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  property1 = "Button primary",
  buttonHeight,
  buttonAlignItems,
  buttonJustifyContent,
  buttonPosition,
  buttonTop,
  buttonLeft,
  buttonWidth,
  label,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      height: buttonHeight,
      alignItems: buttonAlignItems,
      justifyContent: buttonJustifyContent,
      position: buttonPosition,
      top: buttonTop,
      left: buttonLeft,
      width: buttonWidth,
      border: "2px solid black", // Inline style for black border
    };
  }, [
    buttonHeight,
    buttonAlignItems,
    buttonJustifyContent,
    buttonPosition,
    buttonTop,
    buttonLeft,
    buttonWidth,
  ]);

  return (
    <div
      className={`rounded-sm flex flex-row items-center justify-center py-5 px-[35px] text-center text-xl font-h4 ${className}`}
      data-property1={property1}
      style={buttonStyle}
    >
      <div className="label relative leading-[28px]">{label}</div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  buttonHeight: PropTypes.string,
  buttonAlignItems: PropTypes.string,
  buttonJustifyContent: PropTypes.string,
  buttonPosition: PropTypes.string,
  buttonTop: PropTypes.string,
  buttonLeft: PropTypes.string,
  buttonWidth: PropTypes.string,
};

export default Button;
