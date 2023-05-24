import React, { useState, useEffect, useRef } from "react";
import profilePicture from "../assets/profilePicture.png";
// import home from "./home.txt";
// import getText from "./getText";
export default function Home() {
  const canvasRef = useRef(null);
  const [text, setText] = useState("");
  const prewrittenText2 = `Hello! How exciting that you've stumbled upon my website.

My name is Anton, and I'm currently a Computer Science student at Gothenburg University, in my final semester.

I've recently completed my bachelor's thesis, where we designed a natural deduction editor specifically for predicate and propositional logic. It has been a gratifying experience working on this project, allowing me to acquire valuable skills and knowledge.

Personally, I consider myself a logical and curious individual, always seeking out fresh and innovative solutions to problems. I find backend development to be the most challenging and enjoyable aspect of my work, and I aspire to further refine my skills in that domain.

Among my various hobbies, I take pleasure in brewing beer, cooking delicious meals, and building computers.

I genuinely hope you find this website intriguing. Should you have any inquiries, feel free to reach out to me via my <a href="https://www.linkedin.com/in/anton-svar%C3%A9n-76827b142/" target="_blank">LinkedIn</a>.`
  const prewrittenText = `Hello! How exciting that you've stumbled upon my website.

My name is Anton, and I'm currently a Computer Science student at Gothenburg University, in my final semester.

I've recently completed my bachelor's thesis, where we designed a natural deduction editor specifically for predicate and propositional logic. It has been a gratifying experience working on this project, allowing me to acquire valuable skills and knowledge.

Personally, I consider myself a logical and curious individual, always seeking out fresh and innovative solutions to problems. I find backend development to be the most challenging and enjoyable aspect of my work, and I aspire to further refine my skills in that domain.

Among my various hobbies, I take pleasure in brewing beer, cooking delicious meals, and building computers.

I genuinely hope you find this website intriguing. Should you have any inquiries, feel free to reach out to me via my <  `;
  var storedHome = sessionStorage.getItem("storedHome");
  useEffect(() => {
    let currentIndex = 0;
    setText("" + prewrittenText[0]);

    const typingInterval = setInterval(() => {
      if (currentIndex >= prewrittenText.length) {
        clearInterval(typingInterval);
      }
      if(prewrittenText.charAt(currentIndex) === "<"){
        
        setText((prevText) => prevText + `a href="https://www.linkedin.com/in/anton-svar%C3%A9n-76827b142/" target="_blank">LinkedIn</a>.`);
        console.log(text);
        currentIndex++;
      } 
      else if (currentIndex < prewrittenText.length - 1) {
        setText((prevText) => prevText + prewrittenText[currentIndex]);
        currentIndex++;
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);
  if (storedHome !== prewrittenText2) {
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
    let windowSize = window.innerWidth / window.screen.width;
    let home = document.getElementById("home-content");

    if (windowSize < 0.25) {
      home.style.display = "inline-block";
    } else home.style.display = "flex";
  }, [window.innerWidth]);
  return (
    <div style={{ display: "flex" }} id="home-content">
      <div
        style={{
          width: "35%",
          whiteSpace: "pre-wrap",
          paddingLeft: "20px",
          color: "#f9f9f9",
          backgroundColor: "#1e1e1e",
          marginRight : "20%"
        }}
        dangerouslySetInnerHTML={{ __html: storedHome}}
      ></div>
      <canvas
        ref={canvasRef}
        style={{
          width: "35%",
          height: "35%"
        }}
      />
    </div>
  );
}
