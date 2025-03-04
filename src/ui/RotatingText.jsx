"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = (text) => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (segment) => segment.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === "characters") {
      const words = currentText.split(" ");
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1,
      }));
    }
    if (splitBy === "words") {
      return currentText.split(" ").map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1,
      }));
    }
    if (splitBy === "lines") {
      return currentText.split("\n").map((line, i, arr) => ({
        characters: [line],
        needsSpace: i !== arr.length - 1,
      }));
    }
    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1,
    }));
  }, [texts, currentTextIndex, splitBy]);

  const handleIndexChange = useCallback((newIndex) => {
    setCurrentTextIndex(newIndex);
    if (onNext) onNext(newIndex);
  }, [onNext]);

  useImperativeHandle(ref, () => ({
    next: () => handleIndexChange((currentTextIndex + 1) % texts.length),
    previous: () => handleIndexChange((currentTextIndex - 1 + texts.length) % texts.length),
    jumpTo: (index) => handleIndexChange(Math.max(0, Math.min(index, texts.length - 1))),
    reset: () => handleIndexChange(0),
  }), [texts.length, currentTextIndex, handleIndexChange]);

  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(() => handleIndexChange((currentTextIndex + 1) % texts.length), rotationInterval);
    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts.length, rotationInterval, auto, handleIndexChange]);

  return (
    <motion.span className={cn("flex flex-wrap whitespace-pre-wrap relative", mainClassName)} {...rest} layout transition={transition}>
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.div key={currentTextIndex} className={cn("flex flex-wrap whitespace-pre-wrap relative")} layout aria-hidden="true">
          {elements.map((wordObj, wordIndex) => (
            <span key={wordIndex} className={cn("inline-flex", splitLevelClassName)}>
              {wordObj.characters.map((char, charIndex) => (
                <motion.span key={charIndex} initial={initial} animate={animate} exit={exit} transition={{ ...transition }} className={cn("inline-block", elementLevelClassName)}>
                  {char}
                </motion.span>
              ))}
              {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = "RotatingText";

RotatingText.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  transition: PropTypes.object,
  initial: PropTypes.object,
  animate: PropTypes.object,
  exit: PropTypes.object,
  animatePresenceMode: PropTypes.string,
  animatePresenceInitial: PropTypes.bool,
  rotationInterval: PropTypes.number,
  staggerDuration: PropTypes.number,
  staggerFrom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loop: PropTypes.bool,
  auto: PropTypes.bool,
  splitBy: PropTypes.string,
  onNext: PropTypes.func,
  mainClassName: PropTypes.string,
  splitLevelClassName: PropTypes.string,
  elementLevelClassName: PropTypes.string,
};

export default RotatingText;