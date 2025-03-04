import BlurText from "../ui/BlurText";
import RotatingText from "../ui/RotatingText";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="w-full h-auto min-h-[700px] bg-bunker-950 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-bunker-50 flex items-center">
        <BlurText
          text="Hi, I'm Jois "
          delay={150}
          animateBy="words"
          direction="top"
        />
        <span className="bg-bunker-700 p-2 rounded-xl">
          <RotatingText texts={["He", "Him"]} rotationInterval={2000} />
        </span>
      </h1>
      <p className="text-xl md:text-2xl lg:text-4xl text-bunker-200 my-2">
        Front-end developer from Chile
      </p>
      <a
        href="#ContactMe"
        className="primary-button text-bunker-50 px-4 py-2 rounded-xl mt-4"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;