import React, { useEffect, useState } from "react";
import Style from "../assets/styles/comps/typingEffect.module.css";

const TypingEffect = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["DEVELOPER", "MARKETER"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 100;

  useEffect(() => {
    if (subIndex === words[index].length + 7 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, words, index]);

  return (
    <div className={Style.typeWriter}>
      WE ARE GAME <br />{" "}
      <span className={Style.typeWriterTxt}>
        {words[index].substring(0, subIndex)}
      </span>
      <br />
    </div>
  );
};

export default TypingEffect;
