import AliceCarousel from "react-alice-carousel";
import { SKILLS, SKILLS1 } from "./Skills";

const SkillsMobile = () => {
  const items = SKILLS.concat(SKILLS1).map((skill, index) => (
    <div
      key={index}
      className="w-36 md:h-36 flex flex-col items-center bg-transparent shadow-lg  rounded-md p-4 transition-transform transform hover:scale-105"
    >
      <div className="text-7xl mb-2">{skill.icon}</div>
    </div>
  ));
  return (
    <div className="w-full mt-5 bg-transparent rounded-2xl">
      <AliceCarousel
        items={items}
        responsive={{
          0: { items: 3 },
          480: { items: 4 },
          768: { items: 5 },
          1024: { items: 6 },
        }}
        autoPlay
        infinite
        disableButtonsControls
        disableDotsControls
      />
    </div>
  );
};

export default SkillsMobile;
