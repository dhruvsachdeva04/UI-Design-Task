import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import ServicesIntro from "../components/ServicesIntro";
import ProcessIntro from "../components/ProcessIntro";
import Button from "../components/Button";
import TestimonialsIntro from "../components/TestimonialsIntro";
import FrameComponent2 from "../components/FrameComponent2";

const Desktop = () => {
  return (
    <div className="w-full h-[3627px] relative bg-white leading-[normal] tracking-[normal] mq1350:h-auto mq1350:min-h-[3627]">
      <FrameComponent />
      <FrameComponent1 />
      <ServicesIntro />
      <ProcessIntro />
      <Button
        property1="Button primary"
        buttonHeight="unset"
        buttonAlignItems="center"
        buttonJustifyContent="center"
        buttonPosition="absolute"
        buttonTop="2901px"
        buttonLeft="1071px"
        buttonWidth="269px"
        label="See all team"
      />
      <TestimonialsIntro />
      <FrameComponent2 />
    </div>
  );
};

export default Desktop;
