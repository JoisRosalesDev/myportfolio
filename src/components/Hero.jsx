import BlurText from "../ui/BlurText";
import RotatingText from "../ui/RotatingText";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="w-full h-auto min-h-[700px] bg-bunker-950 flex flex-col justify-center items-center"
    >
      <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-tanker text-bunker-50 flex items-center">
        <BlurText
          text="Hey, I'm Jois "
          delay={150}
          animateBy="words"
          direction="top"
        />
        <span className="bg-bunker-600/80 p-2 rounded-xl">
          <RotatingText texts={["He", "Him"]} rotationInterval={2000} />
        </span>
      </h1>
      <p className="text-2xl md:text-4xl lg:text-6xl font-erode font-bold italic text-bunker-50/80 my-2">
        Front-end developer from Chile
      </p>
      <a
        href="#ContactMe"
        className="bg-bunker-600 hover:bg-bunker-700 hover:scale-110 transition-all text-bunker-50 px-4 py-2 rounded-xl mt-4"
      >
        Contact
      </a>
    </section>
  );
};

export default Hero;