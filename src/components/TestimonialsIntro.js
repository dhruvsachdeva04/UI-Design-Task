import Heading from "./Heading";
import Card from "./Card";
import PropTypes from "prop-types";

const TestimonialsIntro = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[2250px] left-[0px] w-full flex flex-col items-start justify-start pt-0 px-0 pb-[37px] box-border gap-20 max-w-full text-left text-lg text-black font-h4 mq800:gap-10 mq450:gap-5 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-[100px] pr-[572px] box-border gap-10 max-w-full mq800:gap-5 mq800:pl-[50px] mq800:pr-[286px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <Heading
          property1="Green"
          label="Testimonials"
          labelMargin="0"
          labelWidth="unset"
          labelHeight="unset"
          label1="Label"
          labelWidth1="unset"
          labelHeight1="unset"
          label2="Label"
          showLabel
        />
        <div className="flex-1 relative inline-block min-w-[307px] max-w-full">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[100px] box-border max-w-full text-white mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[1240px] rounded-26xl bg-dark overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[84px] px-[331px] pb-[68px] box-border gap-[124px] max-w-full z-[1] mq800:gap-[31px] mq800:pl-[82px] mq800:pr-[82px] mq800:box-border mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:gap-[62px] mq1350:pl-[165px] mq1350:pr-[165px] mq1350:box-border">
          <div className="ml-[-677px] w-[2117px] overflow-x-auto flex flex-row items-start justify-start gap-[50px] max-w-[367%] mq800:gap-[25px]">
            <Card rectangle55="pending_2:1935" polygon1="pending_2:1936" />
            <div className="flex flex-col items-start justify-start gap-5 max-w-full">
              <div className="w-[606px] h-[266px] relative">
                <div className="absolute top-[0px] left-[0px] bg-dark w-full h-full flex flex-row items-start justify-start">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-26xl w-[606px] h-[238px]"
                      alt=""
                    />
                    <img
                      className="absolute top-[227.1px] left-[51px] w-16 h-[38.9px] object-contain z-[1]"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="absolute top-[48px] left-[52px] inline-block w-[502px] z-[2]">
                  "We have been working with Positivus for the past year and
                  have seen a significant increase in website traffic and leads
                  as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence."
                </div>
              </div>
              <div className="w-[606px] flex flex-row items-start justify-end text-xl text-green">
                <div className="w-[526px] relative inline-block shrink-0 max-w-full">
                  <p className="m-0 font-medium">John Smith</p>
                  <p className="m-0 text-lg text-white">
                    Marketing Director at XYZ Corp
                  </p>
                </div>
              </div>
            </div>
            <Card
              bubbleContentWidth="374px"
              bubbleContentRight="unset"
              bubbleContentLeft="0px"
              rectangle55="pending_2:1949"
              rectangleIconLeft="0px"
              polygon1="pending_2:1950"
              polygonIconLeft="51px"
            />
          </div>
          <div className="w-[564px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <img
                className="w-5 h-0 relative"
                loading="lazy"
                alt=""
                src="/arrow-left.svg"
              />
            </div>
            <img
              className="h-3.5 w-[146px] relative"
              loading="lazy"
              alt=""
              src="/navigation-stars.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <img
                className="w-5 h-0 relative object-contain"
                loading="lazy"
                alt=""
                src="/arrow-right@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialsIntro.propTypes = {
  className: PropTypes.string,
};

export default TestimonialsIntro;
