import Heading from "./Heading";
import Link from "./Link";
import PropTypes from "prop-types";

const ServicesIntro = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[971px] left-[0px] w-full flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-20 max-w-full text-left text-21xl text-black font-h4 mq800:gap-10 mq450:gap-5 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-[100px] pr-[542px] box-border gap-10 max-w-full mq800:gap-5 mq800:pl-[50px] mq800:pr-[271px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <Heading
          property1="Green"
          label="Services"
          label1="Label"
          label2="Label"
          showLabel
        />
        <div className="flex-1 relative text-lg inline-block min-w-[377px] max-w-full mq1125:min-w-full">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-xl mq800:gap-5">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 px-[100px] box-border gap-10 max-w-full mq800:gap-5 mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 shadow-[0px_5px_0px_#191a23] rounded-26xl bg-grey border-dark border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[50px] min-w-[390px] max-w-full gap-5 mq800:flex-wrap mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq800:min-w-full">
            <div className="flex flex-col items-start justify-center gap-[93px] mq800:flex-1">
              <Heading
                property1="Green"
                label="Search engine"
                labelMargin="0"
                labelWidth="unset"
                labelHeight="unset"
                label1="optimization"
                labelWidth1="unset"
                labelHeight1="unset"
                label2="(SEO)"
                showLabel
              />
              <Link property1="Black" />
            </div>
            <img
              className="h-[170px] w-[210px] relative object-cover mq800:flex-1"
              loading="lazy"
              alt=""
              src="/illustration-1@2x.png"
            />
          </div>
          <div className="flex-1 shadow-[0px_5px_0px_#191a23] rounded-26xl bg-green border-dark border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[50px] min-w-[390px] max-w-full gap-5 mq800:flex-wrap mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq800:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[93px] mq800:flex-1">
              <Heading
                property1="White"
                label="Pay-per-click"
                labelMargin="0"
                labelWidth="unset"
                labelHeight="unset"
                label1="advertising"
                labelWidth1="unset"
                labelHeight1="unset"
                label2="Label"
                showLabel
              />
              <Link property1="Black" />
            </div>
            <img
              className="h-[147.6px] w-[210px] relative object-cover mq800:flex-1"
              loading="lazy"
              alt=""
              src="/illustration-2@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ServicesIntro.propTypes = {
  className: PropTypes.string,
};

export default ServicesIntro;
