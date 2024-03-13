import React, { useState, useEffect } from 'react';

// Cursor component
const Cursor = () => <span className="cursor">|</span>;

const Typewriter = () => {
  const texts = ["I am Fatih Sorucu.", "I am a Web Developer.", "I love coding."];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (texts && texts[currentTextIndex] && currentIndex <= texts[currentTextIndex].length) {
        setDisplayText(texts[currentTextIndex].substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  // Toggle cursor visibility every 500ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="typewriter" style={{ height: '6em', overflow: 'hidden' }}>
      <p>{displayText}{cursorVisible && <Cursor />}</p>
    </div>
  );
}

export default Typewriter;
