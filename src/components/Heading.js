import { useMemo } from "react";
import PropTypes from "prop-types";

const Heading = ({
  className = "",
  property1 = "Green",
  label,
  labelMargin,
  labelWidth,
  labelHeight,
  label1,
  labelWidth1,
  labelHeight1,
  label2,
  showLabel,
}) => {
  const labelStyle = useMemo(() => {
    return {
      margin: labelMargin,
    };
  }, [labelMargin]);

  const label1Style = useMemo(() => {
    return {
      width: labelWidth,
      height: labelHeight,
    };
  }, [labelWidth, labelHeight]);

  const label2Style = useMemo(() => {
    return {
      width: labelWidth1,
      height: labelHeight1,
    };
  }, [labelWidth1, labelHeight1]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-21xl text-black font-h4 [&_.label1]:data-[property1='White']:bg-white [&_.label2]:data-[property1='White']:text-11xl [&_.label3]:data-[property1='White']:bg-white [&_.label3]:data-[property1='White']:flex [&_.label4]:data-[property1='White']:w-[unset] [&_.label4]:data-[property1='White']:h-[unset] [&_.label4]:data-[property1='White']:text-11xl [&_.label4]:data-[property1='White']:[display:unset] [&_.label4]:data-[property1='White']:m-0 [&_.label5]:data-[property1='White']:bg-white ${className}`}
      data-property1={property1}
    >
      <div className="label1 rounded-6xs bg-green flex flex-col items-start justify-start py-0 px-[7px]">
        <h1
          className="label2 m-0 relative text-inherit font-medium font-[inherit]"
          style={labelStyle}
        >
          {label}
        </h1>
      </div>
      <div
        className="label3 rounded-6xs bg-green hidden flex-col items-start justify-start py-0 px-[7px]"
        style={label1Style}
      >
        <div className="label4 w-[105px] h-[51px] relative font-medium inline-block">
          {label1}
        </div>
      </div>
      <div
        className="label5 rounded-6xs bg-green hidden flex-col items-start justify-start py-0 px-[7px]"
        style={label2Style}
      >
        {showLabel && (
          <div className="w-[105px] h-[51px] relative font-medium inline-block">
            {label2}
          </div>
        )}
      </div>
    </div>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  label1: PropTypes.string,
  label2: PropTypes.string,
  showLabel: PropTypes.bool,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  labelMargin: PropTypes.string,
  labelWidth: PropTypes.string,
  labelHeight: PropTypes.string,
  labelWidth1: PropTypes.string,
  labelHeight1: PropTypes.string,
};

export default Heading;
