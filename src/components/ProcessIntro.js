import Heading from "./Heading";
import Content from "./Content";
import PropTypes from "prop-types";

const ProcessIntro = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[1513px] left-[0px] w-full flex flex-col items-start justify-start pt-0 px-0 pb-[68px] box-border gap-20 max-w-full text-left text-lg text-black font-h4 mq800:gap-10 mq450:gap-5 ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pl-[100px] pr-[596px] box-border gap-10 max-w-full mq800:gap-5 mq800:pl-[50px] mq800:pr-[298px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap">
        <Heading
          property1="Green"
          label="Our Working Process "
          labelMargin="0"
          labelWidth="unset"
          labelHeight="unset"
          label1="Label"
          labelWidth1="unset"
          labelHeight1="unset"
          label2="Label"
          showLabel
        />
        <div className="w-[292px] relative inline-block shrink-0">
          Step-by-Step Guide to Achieving Your Business Goals
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start py-0 px-[100px] box-border gap-[30px] max-w-full mq800:gap-[15px] mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="self-stretch shadow-[0px_5px_0px_#191a23] rounded-26xl bg-green border-dark border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[39px] pl-[59px] pr-14 gap-[30px] max-w-full mq800:gap-[15px] mq1350:pl-[29px] mq1350:pr-7 mq1350:box-border">
            <div className="self-stretch h-px relative border-black border-t-[1px] border-solid box-border" />
            <div className="h-[60px] relative inline-block shrink-0">
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </div>
            <Content
              emptyStepPlaceholder="01"
              consultation="Consultation"
              plusIcon="/plus-icon.svg"
            />
          </div>
          <div className="self-stretch shadow-[0px_5px_0px_#191a23] rounded-26xl bg-grey border-dark border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[39px] pl-[59px] pr-14 max-w-full mq1350:pl-[29px] mq1350:pr-7 mq1350:box-border">
            <Content
              labelWidth="712px"
              emptyStepPlaceholder="02"
              consultation="Research and Strategy Development"
              consultationMinWidth="398px"
              plusIcon="/plus-icon-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ProcessIntro.propTypes = {
  className: PropTypes.string,
};

export default ProcessIntro;
