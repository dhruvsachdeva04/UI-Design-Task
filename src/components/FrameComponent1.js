import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[783px] left-[0px] w-[1440px] flex flex-row items-start justify-start pt-0 px-0 pb-[70px] box-border max-w-full ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-between py-0 px-[100px] box-border max-w-full gap-5 mq1125:flex-wrap mq1125:justify-center">
        <img
          className="h-12 w-[124.1px] relative overflow-hidden shrink-0 mix-blend-luminosity"
          loading="lazy"
          alt=""
          src="/company-logo.svg"
        />
        <img
          className="h-12 w-[126.4px] relative overflow-hidden shrink-0 mix-blend-luminosity"
          loading="lazy"
          alt=""
          src="/company-logo-1.svg"
        />
        <img
          className="h-12 w-[128.6px] relative overflow-hidden shrink-0 mix-blend-luminosity"
          loading="lazy"
          alt=""
          src="/company-logo-2.svg"
        />
        <img
          className="h-12 w-[145.6px] relative overflow-hidden shrink-0 mix-blend-luminosity"
          loading="lazy"
          alt=""
          src="/company-logo-3.svg"
        />
        <img
          className="h-12 w-[125.2px] relative overflow-hidden shrink-0 mix-blend-luminosity"
          loading="lazy"
          alt=""
          src="/company-logo-4.svg"
        />
        <img
          className="h-12 w-[110.6px] relative overflow-hidden shrink-0 mix-blend-luminosity"
          loading="lazy"
          alt=""
          src="/company-logo-5.svg"
        />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
