import { Button, Typography } from "@mui/material";
import profilePicture from "../assets/profilePicture.png";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const canvasRef = useRef(null);
  var storedContact = sessionStorage.getItem("storedContact");
  const prewrittenText = `Hello sir my name is anton I am a software engineer`;
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

  const [text, setText] = useState("");

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

  if(storedContact !== prewrittenText){
    sessionStorage.setItem("storedContact", text)
  }
  

  return (
    <div style={{ display: "flex" }}>
      {storedContact}
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
  );
}
