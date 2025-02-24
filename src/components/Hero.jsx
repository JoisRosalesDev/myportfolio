const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-auto min-h-[700px] bg-bunker-950 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-bunker-50">
        Hi, I&apos;m Jois
      </h1>
      <p className="text-xl md:text-2xl lg:text-4xl text-bunker-200">
        A Front-end developer from Chile
      </p>
      <a
        href="#contact"
        className="primary-button text-bunker-50 px-4 py-2 rounded-full mt-4"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;