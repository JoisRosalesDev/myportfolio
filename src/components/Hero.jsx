import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Jois (He/Him)";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-auto min-h-[700px] bg-bunker-950 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-bunker-50">
        {text}
      </h1>
      <p className="text-xl md:text-2xl lg:text-4xl text-bunker-200">
        Front-end developer from Chile
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
