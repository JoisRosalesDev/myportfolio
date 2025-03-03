import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const TypedText = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let isMounted = true;

    const typeText = () => {
      if (!isMounted) return;
      
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, [text, typingSpeed]);

  return displayedText;
};

TypedText.propTypes = {
  text: PropTypes.string.isRequired,
  typingSpeed: PropTypes.number
};

const Hero = () => {
  return (
    <section
      id="Hero"
      className="w-full h-auto min-h-[700px] bg-bunker-950 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-bunker-50">
        <TypedText text="Hi, I'm Jois (He/Him)" />
      </h1>
      <p className="text-xl md:text-2xl lg:text-4xl text-bunker-200">
        Front-end developer from Chile
      </p>
      <a
        href="#ContactMe"
        className="primary-button text-bunker-50 px-4 py-2 rounded-full mt-4"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;