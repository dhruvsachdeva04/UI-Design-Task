import Logo from "./Logo";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[60px] left-[0px] w-full flex flex-col items-start justify-start gap-[70px] max-w-full text-left text-xl text-black font-h4 mq800:gap-[35px] mq450:gap-[17px] ${className}`}
    >
      <header className="self-stretch overflow-hidden flex flex-row items-start justify-center py-0 px-5 box-border gap-[209.5px] max-w-full mq800:gap-[52px] mq450:gap-[26px] mq1350:gap-[105px]">
        <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
          <Logo
            property1="Default"
            icon="/icon.svg"
            positivus="/positivus.svg"
          />
        </div>
        <nav className="m-0 w-[811px] flex flex-row items-start justify-between gap-5 max-w-full text-left text-xl text-black font-h4 mq1125:hidden">
          <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
            <div className="relative leading-[28px] inline-block min-w-[89px]">
              About us
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
            <div className="relative leading-[28px]">Services</div>
          </div>
          <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
            <div className="relative leading-[28px] inline-block min-w-[100px]">
              Use Cases
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
            <div className="relative leading-[28px] inline-block min-w-[68px]">
              Pricing
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
            <div className="relative leading-[28px] inline-block min-w-[45px]">
              Blog
            </div>
          </div>
          <Button
            property1="Button secondary"
            buttonHeight="68px"
            label="Request a quote"
          />
        </nav>
      </header>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-0 px-[100px] box-border max-w-full gap-5 mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:flex-wrap mq1350:justify-center mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border">
        <div className="w-[531px] flex flex-col items-start justify-start gap-[35px] max-w-full mq800:gap-[17px] mq800:min-w-full mq1350:flex-1">
          <h1 className="m-0 relative text-41xl font-medium font-[inherit] mq800:text-29xl mq450:text-17xl">
            Navigating the digital landscape for success
          </h1>
          <div className="w-[498px] relative leading-[28px] inline-block max-w-full mq450:text-base mq450:leading-[22px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </div>
          <Button
            property1="Button primary"
            label="Book a consultation"
            className="bg-black text-white border-black"
          />
        </div>
        <img
          className="w-[600.5px] relative max-h-full max-w-full mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/illustration.svg"
        />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
