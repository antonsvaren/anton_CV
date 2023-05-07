import React, { useState, useEffect, useRef } from "react";
import profilePicture from "../assets/profilePicture.png";
// import home from "./home.txt";
// import getText from "./getText";
export default function Home() {
  const canvasRef = useRef(null);
  const [text, setText] = useState("");

  const prewrittenText =
`Hello! How fun that you found your way into my website.
My name is Anton, I am a Computer Science student and
I am attending my last semester  at Gothenburg University.

As of right now, I am finishing my bachelor thesis.
We are developing a natural deduction editor for
predicate- and propositional logic. I have thoroughly
enjoyed working on this project and have gained
valuable skills and knowledge from it.

I would describe myself as a
logical and curios person that loves to find
new and innovative solutions to problems.

Some of my many hobbies are brewing beer,
cook food and build computers.

I hope you can find this site interesting,
and if anything, you can find my contact info on
my <a href="https://www.linkedin.com/in/anton-svar%C3%A9n-76827b142/" target="_blank">LinkedIn</a>.


Best, Anton`
  var storedHome = sessionStorage.getItem("storedHome");
  useEffect(() => {
    let currentIndex = 1;
    setText("H" + prewrittenText[1]);

    const typingInterval = setInterval(() => {
      if (currentIndex >= prewrittenText.length) {
        clearInterval(typingInterval);
      } else if (currentIndex < prewrittenText.length - 1) {
        setText((prevText) => prevText + prewrittenText[currentIndex]);
        currentIndex++;
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);
  if(storedHome !== prewrittenText){
    sessionStorage.setItem("storedHome", text);
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = profilePicture;
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const size = Math.min(width, height);
      canvas.width = size;
      canvas.height = size;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(
        img,
        (width - size) / 2,
        (height - size) / 2,
        size,
        size,
        0,
        0,
        size,
        size
      );
    };
  }, []);
  return <div style={{display : "flex"}}>
    <div style={{whiteSpace : "pre-wrap", paddingLeft : "20px"}} dangerouslySetInnerHTML={{ __html: storedHome }}></div>
    <canvas
        ref={canvasRef}
        style={{
          scale: "0.8",
          position: "absolute",
          right: "0",
          paddingBottom: "100px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      />
  </div> 
}
