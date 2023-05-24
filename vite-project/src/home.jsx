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

As of right now, I have just finished my bachelor thesis.
We developed a natural deduction editor for
predicate- and propositional logic. I have thoroughly
enjoyed working on this project and have gained
valuable skills and knowledge from it.

I would describe myself as a
logical and curious person that loves to find
new and innovative solutions to problems.

I find backend devlopment most challenging and
fun to work with and wish to furthur develop
my skills in that area.

Some of my many hobbies are brewing beer,
cook food and build computers.

I hope you can find this site interesting,
and if anything, you can find my contact info on
my <a href="https://www.linkedin.com/in/anton-svar%C3%A9n-76827b142/" target="_blank">LinkedIn</a>.

Best regards, Anton `
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

  useEffect(() => {
    let windowSize = (window.innerWidth / window.screen.width);
    let home = document.getElementById("home-content");
    
    if(windowSize < 0.25){
      home.style.display = "inline-block";
    }
    else home.style.display = "flex";
    console.log(home.style.display);
   
  },[window.innerWidth])
  return <div style = {{display : "flex"}} id = "home-content">
    <div style={{whiteSpace : "pre-wrap", paddingLeft : "20px", color : "#f9f9f9", backgroundColor : "#1e1e1e"}} dangerouslySetInnerHTML={{ __html: storedHome }}></div>
    <canvas
        ref={canvasRef}
        style={{
          // maxWidth : "50%",
          // maxHeight : "50%",
          // minHeight : "15%",
          // minWidth : "25%"
          width : "35%",
          height : "35%",
          paddingLeft : "15%"
        }}
      />
  </div> 
}
