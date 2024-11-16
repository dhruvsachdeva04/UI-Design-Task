import { useMemo } from "react";
import PropTypes from "prop-types";

const Logo = ({
  className = "",
  property1 = "Default",
  logoWidth,
  logoHeight,
  icon,
  positivus,
}) => {
  const logoStyle = useMemo(() => {
    return {
      width: logoWidth,
      height: logoHeight,
    };
  }, [logoWidth, logoHeight]);

  return (
    <div
      className={`w-[219.5px] h-9 flex flex-row items-start justify-start gap-[12.9px] [&_.icon]:data-[property1='Variant2']:h-[29px] [&_.icon]:data-[property1='Variant2']:w-[29.5px] [&_.positivus-wrapper]:data-[property1='Variant2']:h-[25.4px] [&_.positivus-wrapper]:data-[property1='Variant2']:w-[139.9px] [&_.positivus-icon]:data-[property1='Variant2']:w-[139.9px] [&_.positivus-icon]:data-[property1='Variant2']:h-[23px] [&_.positivus-icon]:data-[property1='Variant2']:[flex-shrink:unset] ${className}`}
      data-property1={property1}
      style={logoStyle}
    >
      <img
        className="icon h-9 w-9 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={icon}
      />
      <div className="positivus-wrapper h-[31.6px] w-[170.6px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <img
          className="positivus-icon w-[170.6px] h-[28.6px] relative shrink-0"
          loading="lazy"
          alt=""
          src={positivus}
        />
      </div>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  positivus: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  logoWidth: PropTypes.string,
  logoHeight: PropTypes.string,
};

export default Logo;
