import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({
  className = "",
  bubbleContentWidth,
  bubbleContentRight,
  bubbleContentLeft,
  rectangle55,
  rectangleIconLeft,
  polygon1,
  polygonIconLeft,
}) => {
  const bubbleContentStyle = useMemo(() => {
    return {
      width: bubbleContentWidth,
      right: bubbleContentRight,
      left: bubbleContentLeft,
    };
  }, [bubbleContentWidth, bubbleContentRight, bubbleContentLeft]);

  const rectangleIconStyle = useMemo(() => {
    return {
      left: rectangleIconLeft,
    };
  }, [rectangleIconLeft]);

  const polygonIconStyle = useMemo(() => {
    return {
      left: polygonIconLeft,
    };
  }, [polygonIconLeft]);

  return (
    <div
      className={`flex flex-col items-start justify-start pt-12 pb-0 pl-[52px] pr-0 relative gap-[100px] text-left text-lg text-white font-h4 mq800:gap-[50px] mq800:pl-[26px] mq800:box-border mq450:gap-[25px] ${className}`}
    >
      <div className="w-full h-[266px] !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-dark flex flex-row items-start justify-start">
        <div
          className="h-full w-[360px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px]"
          style={bubbleContentStyle}
        >
          <img
            className="absolute top-[0px] left-[-246px] rounded-26xl w-[606px] h-[238px]"
            alt=""
            src={rectangle55}
            style={rectangleIconStyle}
          />
          <img
            className="absolute top-[227.1px] left-[-195px] w-16 h-[38.9px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={polygon1}
            style={polygonIconStyle}
          />
        </div>
      </div>
      <div className="w-[502px] relative inline-block max-w-full z-[2]">
        "We have been working with Positivus for the past year and have seen a
        significant increase in website traffic and leads as a result of their
        efforts. The team is professional, responsive, and truly cares about the
        success of our business. We highly recommend Positivus to any company
        looking to grow their online presence."
      </div>
      <div className="flex flex-row items-start justify-start py-0 pl-7 pr-0 box-border max-w-full text-xl text-green">
        <div className="w-[526px] relative inline-block shrink-0 max-w-full">
          <p className="m-0 font-medium">John Smith</p>
          <p className="m-0 text-lg text-white">
            Marketing Director at XYZ Corp
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  rectangle55: PropTypes.string,
  polygon1: PropTypes.string,

  /** Style props */
  bubbleContentWidth: PropTypes.string,
  bubbleContentRight: PropTypes.string,
  bubbleContentLeft: PropTypes.string,
  rectangleIconLeft: PropTypes.string,
  polygonIconLeft: PropTypes.string,
};

export default Card;
