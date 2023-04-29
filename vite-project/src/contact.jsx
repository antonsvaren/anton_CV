import { Button, Typography } from "@mui/material";
import profilePicture from "../assets/profilePicture.png";
import { useEffect, useRef } from "react";

export default function Contact() {
  const canvasRef = useRef(null);

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
      ctx.drawImage(img, (width - size) / 2, (height - size) / 2, size, size, 0, 0, size, size);
    };
  }, []);

  return (
    <div style={{display : "flex"}}>
      <Typography>THIS IS MY CONTACT!</Typography>
      <canvas ref={canvasRef} style={{ scale : "0.8", position: "absolute", right: "0", paddingBottom: "100px", paddingLeft: "100px", paddingRight: "100px"}} />
    </div>
  );
}
