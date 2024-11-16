import { useMemo } from "react";
import PropTypes from "prop-types";

const Content = ({
  className = "",
  labelWidth,
  emptyStepPlaceholder,
  consultation,
  consultationMinWidth,
  plusIcon,
}) => {
  const label3Style = useMemo(() => {
    return {
      width: labelWidth,
    };
  }, [labelWidth]);

  const consultationStyle = useMemo(() => {
    return {
      minWidth: consultationMinWidth,
    };
  }, [consultationMinWidth]);

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-row items-center justify-between max-w-full gap-5 text-left text-41xl text-black font-h4 mq1125:flex-wrap ${className}`}
    >
      <div
        className="w-[702px] flex flex-row items-center justify-start gap-[25px] max-w-full mq800:flex-wrap"
        style={label3Style}
      >
        <div className="relative font-medium mq800:text-29xl mq450:text-17xl">
          {emptyStepPlaceholder}
        </div>
        <h2
          className="m-0 flex-1 relative text-11xl font-medium font-[inherit] inline-block min-w-[146px] max-w-full mq800:text-5xl mq450:text-lg"
          style={consultationStyle}
        >
          {consultation}
        </h2>
      </div>
      <img
        className="h-[58px] w-[58px] relative"
        loading="lazy"
        alt=""
        src={plusIcon}
      />
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  emptyStepPlaceholder: PropTypes.string,
  consultation: PropTypes.string,
  plusIcon: PropTypes.string,

  /** Style props */
  labelWidth: PropTypes.string,
  consultationMinWidth: PropTypes.string,
};

export default Content;
