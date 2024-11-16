import PropTypes from "prop-types";

const Link = ({ className = "", property1 = "White" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[15px] text-left text-xl text-black font-h4 ${className}`}
      data-property1={property1}
    >
      <img
        className="h-[41px] w-[41px] relative"
        loading="lazy"
        alt=""
        src="/icon-1.svg"
      />
      <div className="relative leading-[28px]">Learn more</div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Link;
