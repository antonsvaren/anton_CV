import { Button, Typography } from "@mui/material";
import logium from "../assets/logium.svg";
import { useEffect, useState } from "react";
export default function Portfolio() {
  const [text, setText] = useState("");

  const prewrittenText = `Hello again! This is my portfolio. Here you can find some of my projects.`;
  var storedPortfolio = sessionStorage.getItem("storedPortfolio");
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
  if (storedPortfolio !== prewrittenText) {
    sessionStorage.setItem("storedPortfolio", text);
  }
  return (
    <div style={{display : "grid",  margin: "auto",
    width: "50%",
    padding: "10px"}}>
      <Typography
        variant="h4"
        style={{ position: "relative", fontFamily: "Courier New" , marginBottom  : "100px"}}
      >
        {storedPortfolio}
      </Typography>

        <img src={logium} alt="logium, proof editor" />
    </div>
  );
}
