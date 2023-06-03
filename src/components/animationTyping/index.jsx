import { useEffect, useState } from "react";
import "../../style/animationTyping.scss";

function Typewriter({ text, speed = 50, delay = 0, cursor = "_" }) {
  const [currentText, setCurrentText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, speed));
        setCurrentText(text.substr(0, i + 1));
      }
      setIsAnimating(false);
    };

    setIsAnimating(true);
    setTimeout(() => animateText(), delay);
  }, [text, speed, delay]);

  return (
    <div className="boxAnimation">
      <span>{currentText}</span>
      {isAnimating && <span className="typing-animation">{cursor}</span>}
    </div>
  );
}

export default Typewriter;
