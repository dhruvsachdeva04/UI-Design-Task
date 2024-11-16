import Logo from "./Logo";
import Heading from "./Heading";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[3113px] left-[100px] w-[1340px] flex flex-row items-start justify-start max-w-full text-left text-lg text-white font-h4 ${className}`}
    >
      <div className="w-[1241px] rounded-t-26xl rounded-b-none bg-dark flex flex-col items-start justify-start pt-[55px] px-[60px] pb-[50px] box-border gap-[66px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
          <Logo
            property1="Variant2"
            logoWidth="180px"
            logoHeight="29px"
            icon="/icon-3.svg"
            positivus="/positivus-1.svg"
          />
          <div className="w-[501px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq800:flex-wrap">
              <div className="relative [text-decoration:underline] inline-block min-w-[80px]">
                About us
              </div>
              <div className="relative [text-decoration:underline]">
                Services
              </div>
              <div className="relative [text-decoration:underline] inline-block min-w-[90px]">
                Use Cases
              </div>
              <div className="relative [text-decoration:underline]">
                Pricing
              </div>
              <div className="relative [text-decoration:underline]">Blog</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-5">
            <img
              className="h-[30px] w-[30px] relative"
              loading="lazy"
              alt=""
              src="/social-icon.svg"
            />
            <img
              className="h-[30px] w-[30px] relative"
              loading="lazy"
              alt=""
              src="/social-icon-1.svg"
            />
            <img
              className="h-[30px] w-[30px] relative"
              loading="lazy"
              alt=""
              src="/social-icon-2.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full shrink-0 gap-5 mq1125:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[27px] max-w-full mq1125:flex-1">
              <Heading
                property1="Green"
                label="Contact us:"
                labelMargin="unset"
                labelWidth="119px"
                labelHeight="51px"
                label1="Label"
                labelWidth1="119px"
                labelHeight1="51px"
                label2="Label"
                showLabel={false}
              />
              <div className="flex flex-col items-start justify-start gap-5">
                <div className="relative">Email: info@positivus.com</div>
                <div className="relative">Phone: 555-567-8901</div>
                <div className="relative">
                  <p className="m-0">Address: 1234 Main St</p>
                  <p className="m-0">Moonstone City, Stardust State 12345</p>
                </div>
              </div>
            </div>
            <div className="rounded-sm bg-gray overflow-hidden flex flex-row items-start justify-start py-[58px] px-10 box-border gap-5 min-w-[634px] max-w-full mq800:flex-wrap mq800:min-w-full mq1125:flex-1">
              <div className="flex-1 rounded-sm border-white border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-5 px-[35px] min-w-[185px] min-h-[67px]">
                <div className="relative">Email</div>
              </div>
              <Button
                property1="Button tertiary"
                buttonHeight="unset"
                buttonAlignItems="flex-start"
                buttonJustifyContent="flex-start"
                buttonPosition="unset"
                buttonTop="unset"
                buttonLeft="unset"
                buttonWidth="unset"
                label="Subscribe to news"
              />
            </div>
          </div>
          <div className="self-stretch h-px relative border-white border-t-[1px] border-solid box-border" />
          <div className="flex flex-row items-start justify-start gap-10 max-w-full shrink-0 mq800:flex-wrap">
            <div className="relative leading-[28px] inline-block max-w-full">
              © 2023 Positivus. All Rights Reserved.
            </div>
            <div className="relative [text-decoration:underline] leading-[28px] inline-block min-w-[122px]">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
